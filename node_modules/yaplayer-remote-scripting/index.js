var Vow = require('vow');
var _ = require('lodash');
var isUrl = require('is-url');
var fs = require('fs');
var format = require('util').format;
var https = require('https');
var ipc = require('electron').ipcMain;

var pattern = {

	/**
	 * Format string for isolate execute
	 * @type {String}
	 */
	isolate: [
		'(function(enviroment){',
			'%s',
			'console.log("[inject-js] Isolate, source: %s");',
		'})(%s);'
	].join('\n'),

	/**
	 * Format string for normal execute
	 * @type {String}
	 */
	normal: [
		'%s',
		'console.log("[inject-js] source: %s");'
	].join('\n')
};


function httpsGet(url) {
	var promise = Vow.promise();
	var req = https.request(url, function(res) {
		var data = '';
		res.setEncoding('utf8');
		res.on('data', function (chunk) {
			data += chunk.toString();
		});
		res.on('end', function() {
			promise.fulfill(data);
		});
	});
	req.end();
	req.on('error', function(e) {
		console.error(e);
		promise.reject(e);
	});
	return promise;
}


function load(options) {
	var promise = Vow.promise();
	var win = options.browserWindow;
	var contents = win.webContents;
	var sourcePath = options.source;
	var source = '';

	contents.send('remote:scripting:indicate', 'Load script from ' + sourcePath);

	// Load source
	if (isUrl(sourcePath)) {
		// Get by URL
		httpsGet(sourcePath).then(function(data) {
			source = data;
			executeJavaScript();
		});
	} else {
		// Get from local file path
		source = fs.readFileSync(sourcePath).toString();
		executeJavaScript();
	}

	function executeJavaScript() {
		source = options.preload(source, options);
		// Prepare executeble source
		var script = format(options.isolate ? pattern.isolate : pattern.normal,
				source, sourcePath.replace(/\\/g, '\\\\'), JSON.stringify(options.enviroment));

		// Execute source on client side
		contents.executeJavaScript(script);
		// Take sometime to JIT
		setTimeout(function() {
			promise.fulfill();
		}, options.lazy);
	}
	return promise;
}


/**
 * Load script to browser window webContents
 * @param {Object} options Options
 * @param {Object} options.browserWindow Browser windows instance
 * @param {String || String[]} options.source URL or path to source script
 * @param {Function} [options.preload] Run before execute javascript
 * @param {Boolean} [options.isolate=false] If need load script in isolate scope
 * @param {Object} [options.enviroment={}] Enviroment variable for isolate load
 * @param {Number} [options.lazy=0] Timeout between injects
 */
function inject(options) {
	var promise = Vow.promise();
	options = _.defaults(options, {
		preload: function(source, options) {
			return source;
		},
		isolate: false,
		enviroment: {},
		lazy: 0
	});
	var sourceList = _.isString(options.source) ? [options.source] : options.source;
	var len = sourceList.length;

	function step(idx) {
		var stepOpt = _.defaults({
			source: sourceList[idx]
		}, options);
		load(stepOpt).then(function() {
			idx++;
			len === idx ? promise.fulfill() : step(idx);
		});
	}
	step(0);
	return promise;
}

/**
 * Execute functoin in remote web context
 * @param {Object} browserWindow Browser windows instance
 * @param {Function} func Execute function
 * @returns {Promise}
 */
function execute(browserWindow, func) {
	var promise = Vow.promise();
	// Create uniq key for message name
	var uid = Math.random().toString(36).replace('0.', 'remote:scripting:execute-');

	// Serialize params
	var params = _.map(Array.prototype.slice.call(arguments).slice(2), function(param) {
		return JSON.stringify(param);
	}).join(',');

	// Format eval script
	var evalScript = ['(', func.toString(), ')(', params, ')'].join('');

	// Wrap script anonymous function with ipc send for isolate
	var source = [
		"(function() {",
			"require('electron').ipcRenderer.send('",
				uid,
				"',",
				evalScript,
			");",
		"})();"
	].join('');

	// Subscribe to IPC message
	// @todo: Remove executed UID
	ipc.on(uid, function(sender, data) {
		promise.fulfill(data);
	});

	// Eval script in web content
	browserWindow.webContents.send('remote:scripting:indicate', 'Execute script ...');
	browserWindow.webContents.executeJavaScript(source);
	return promise;
}


module.exports = {
	initIndicate: require('./ui'),
	inject: inject,
	execute: execute
};

