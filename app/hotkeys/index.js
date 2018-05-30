'use strict';

var ipc = require('electron').ipcMain;
const {globalShortcut} = require('electron');
var _ = require('lodash');
var config = require('../config');

// Wait while api-irp:reciever will be released on bond
ipc.on('api:receiver:saveme', function(event) {
	// Mount global hotkeys
	initHotkeys(event.sender);
});

function initHotkeys(handler) {
	_.each(config.hotkeys, function(value, key) {
		console.info('Register global shotcut for key "%s" and event "%s"', value, key);
		globalShortcut.register(value, function() {
			handler.send('api:receiver:' + key);
		});
	});
}
