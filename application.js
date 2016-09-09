'use strict';

var Vow = require('vow');
var _ = require('lodash');
var path  = require('path');

// var app = require('app');
// var BrowserWindow = require('browser-window');

const {app, BrowserWindow} = require('electron')

var remoteScripting = require('yaplayer-remote-scripting');
var scriptInject = remoteScripting.inject;
var remoteExecute = remoteScripting.execute;

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

	var icon = path.join(process.cwd(), 'source/play128.png');

	// Create the browser window.
	var win = new BrowserWindow({
		icon: icon,
		// @todo: add restore size and position
		width: 1024,
		height: 768,
		webSecurity: false
	});

	win.setMenuBarVisibility(false);

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
	win.loadURL('https://music.yandex.ru');

	win.on('closed', function() {
		console.log('[app] close all windows');
		win = null;
		app.quit();
	});


	// Init yaplayer notification
	require('yaplayer-notification')(win);

});


function initYandexMusicApp(win) {
	var promise = Vow.promise();
	win.webContents.on('did-finish-load', function() {
		// Init indicate
		var removeIndicator = remoteScripting.initIndicate(win);

		// load patched lodash lib
		scriptInject({
			browserWindow: win,
			source: [
				path.join(__dirname, 'vendor', 'lodash.js'),
				path.join(__dirname, 'vendor', 'jquery.js')
			]
		}).then(function() {
			return remoteExecute(win, function() {
				return $('script')
					.map(function() {
						return this.src;
					})
					.filter(function(idx, src) {
						// Exclude from script list ya jquery and index.js (already load)
						return src && !src.match(/(push\-notifications)|(context)|(jquery.min)|(index\.js)/);
					})
					.toArray();
			}).then(function(scriptList) {

				console.log(scriptList);

				return scriptInject({
					browserWindow: win,
					source: scriptList,
					/*preload: function(src, opt) {
						// Hook for get application scope
						if (opt.source.match('index.ru.js')) {
							return src.replace('t.init({', 't.init(window.__debugPnt = {');
						}
						return src;
					}*/
				});
			});
		})
		.then(function() {
			removeIndicator();
			win.webContents.executeJavaScript('Mu.init();');
			promise.fulfill();
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

