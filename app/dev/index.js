'use strict';

var _ = require('lodash');
const {app, globalShortcut, BrowserWindow} = require('electron');
var ipc = require('electron').ipcMain;

function devTools() {
	var win = BrowserWindow.getFocusedWindow();
	if (win) {
		win.toggleDevTools();
	}
}

function refresh() {
	var win = BrowserWindow.getFocusedWindow();
	if (win) {
		win.reloadIgnoringCache();
	}
}

function hotkeyForDevTools() {
	// Then app ready
	app.on('ready', function () {
		// Register hotkey when app start
		globalShortcut.register('Ctrl+`', devTools);

		// Register hostkey then app focused
		app.on('browser-window-focus', function () {
			globalShortcut.register('Ctrl+`', devTools);
		});

		// Unregister hotkey then app blur
		app.on('browser-window-blur', function () {
			globalShortcut.unregister('Ctrl+`');
		});
	});
}


function initIpcConsole(browserWindow) {

	function ipcConsole(env, func) {
		require('electron').ipcRenderer.send('dev:ipc:eval', func.toString(), env);
	}
	browserWindow.webContents.executeJavaScript(ipcConsole.toString());

	ipc.on('dev:ipc:eval', function(event, env, func) {
		// @todo ...
		// console.log(func);
		// eval('var compFunc = ' + func);
		// console.log(compFunc)
		// e.sender.send(compFunc(env));
	});
}




hotkeyForDevTools();
// If set arg dev from CLI
if (process.argv.indexOf('--dev') >= 0) {
	// Wait some time and toggle devtools
	setTimeout(devTools, 1000);
	module.exports = function(browserWindow) {
		initIpcConsole(browserWindow);
	}
} else {
	module.exports = _.noop;
}



