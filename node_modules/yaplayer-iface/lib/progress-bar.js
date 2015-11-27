'use strict';

var ipc = require('electron').ipcMain;

module.exports = function(browserWindow) {
	// @todo ...
	ipc.on('api:emitter:progress', function(event, progress) {
		browserWindow.setProgressBar(progress.position/progress.duration);
	});
};
