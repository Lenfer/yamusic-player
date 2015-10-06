var ipc = require('ipc');

// Inject patched jquery version, because in electron enviroment, jQuery defined as node.js module.
// If jquery injected after jquery UI loaded - reload all scripts (without jquery)

// Wait while document not ready
var siId = setInterval(function() {
	if (document && window) {
		clearInterval(siId);
		console.info('[load-fix] Inject patched jQuery libs in page');
		// Init our payched lib
		require('./vendor/jquery.js');
		// Wait some time (not init application another)
		setTimeout(checkYaPlayerApplication, 1000);
	}
}, 0);

var siId2 = setInterval(function() {
	if (window && window.Mu && window.Mu.init) {
		clearInterval(siId2);
		console.log('[load-fix] catch Mu.init!');
		window['floatingConst'] = Math.random().toString(36).replace('0.', '__');
		window[window['floatingConst']] = Mu.init;
		window.Mu.init = function() {
			console.warn('[load-fix] Execute Mu.init function');
		};
	}
}, 0);






/**
 * Check Yandex Music Application on ready and if fail reload JS
 */
function checkYaPlayerApplication() {
	var remoteScriptList = [];

	/**
	 * Load script from list by index
	 * @param {Number} idx Index in array
	 * @param {Function} cb Callback
	 */
	function getScript(idx, cb) {
		// Exit from recursiv
		if (idx === remoteScriptList.length) {
			return cb();
		}
		var scriptUrl = remoteScriptList[idx];
		idx++;
		// Load script if url defined
		if (scriptUrl) {
			console.log('[load-fix] Reload script %s', scriptUrl);
			jQuery.getScript(scriptUrl, function() {
				// Then loaded get next
				getScript(idx, cb);
			});
		} else {
			// Else get next
			getScript(idx, cb);
		}
	}

	// If application dont init
	if (!Mu.init) {
		console.error('[load-fix] Error asynchronous application initialization');
		// Get all loaded scriptd on page
		remoteScriptList = jQuery('script[src]').map(function(idx, el) {
			var url = jQuery(el).attr('src');
			// exclude jquery lib
			if (url.match('jquery.min.js')) {
				return false;
			}
			return url;
		});
		// Load all scripts again
		getScript(0, function() {
			console.info('[load-fix] All scripts reloaded');
			// Init yandex music application
			Mu.init();
			console.info('[load-fix] Application started');
			// say main process about ready
			// fix -- not loaded source in executeJavaScript
			// need wait wail source JIT compiled
			setTimeout(function() {
				ipc.send('load:iamready');
			}, 2000);
		});
	} else {
		console.info('[load-fix] Mu.init is running in normal mode');
		// say main process about ready
		ipc.send('load:iamready');
	}
}
