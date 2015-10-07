'use strict';

var _ = require('lodash');
var Vow = require('vow');
var path  = require('path');
var app = require('app');
var ipc = require('ipc');
var BrowserWindow = require('browser-window');
var scriptInject = require('yaplayer-script-inject');

// require('crash-reporter').start();

// Init Dev utils.
var dev = require('yaplayer-dev');
// Init global hotkeys
require('yaplayer-hotkeys');
// Init UI elements
var iface = require('yaplayer-iface');


app.on('window-all-closed', function() {
	if (process.platform != 'darwin') {
		app.quit();
	}
});



app.on('ready', function() {

	// Create the browser window.
	var win = new BrowserWindow({
		// @todo: add restore size and position
		width: 1024,
		height: 768
	});

	iface(win);

	// Init Yandex music application
	initYandexMusicApp(win)
		.then(function() {
			// Init yaPlayer Application
			loadPlayer(win).then(function() {
				// Init dev utils if need (CLI --dev)
				dev(win);
				console.info('[app] Application init - OK.');
			});
		});

	// load yandex music page
	win.loadUrl('https://music.yandex.ru');

	win.on('closed', function() {
		console.log('[app] close all windows')
		win = null;
		app.quit()
	});


	// Init yaplayer notification
	require('yaplayer-notification');

});


function initYandexMusicApp(win) {
	var promise = Vow.promise();
	win.webContents.on('did-finish-load', function() {
		// load patched lodash lib
		scriptInject({
			browserWindow: win,
			source: [
				path.join(__dirname, 'vendor', 'lodash.js'),
				path.join(__dirname, 'vendor', 'jquery.js'),
				// @todo: Add load script from cache and auto check version
				'https://yastatic.net/jquery-ui/1.10.3/jquery-ui.min.js',
				'https://yastatic.net/share/share.js',
				'https://music.yandex.ru/api/v2.0/index.js?v=0.8.03'
			]
		}).then(function() {
			scriptInject({
				browserWindow: win,
				preload: function(source) {
					return source.replace('var t=new Mu.MiniDi;',
							'var t=window._muMiniDi=new Mu.MiniDi;');
				},
				source: 'https://music.yandex.ru/index.ru.js?v=0.8.03'
			}).then(function() {
				win.webContents.executeJavaScript('Mu.init();');
				promise.fulfill();
			});
		});
	});
	return promise;
}

function loadPlayer(win) {
	// inject own api in page
	var moduledir = path.dirname(require.resolve('yaplayer-api-ipc'));
	return scriptInject({
		browserWindow: win,
		isolate: true,
		source: [
			path.join(moduledir, 'lib', 'emitter.js'),
			path.join(moduledir, 'lib', 'receiver.js')
		]
	});
}

