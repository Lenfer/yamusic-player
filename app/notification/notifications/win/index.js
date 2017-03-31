'use strict';

const _ = require('lodash');
const {BrowserWindow, screen} = require('electron');

const ipc = require('electron').ipcMain;

const notiferHeight = 90;

function getDisplay() {
	return mainWindows ? screen.getDisplayMatching(mainWindows.getBounds())
			: screen.getPrimaryDisplay();
}

// @todo: refactor this shit
var animation = {

	timer: null,

	show: function(next) {
		var timer = this.timer;
		clearInterval(timer);
		notifer.showInactive();
		let bounds = notifer.getBounds();
		let display = getDisplay();
		bounds.width = display.size.width;
		bounds.x = display.bounds.x;
		bounds.y = display.bounds.y;
		timer = setInterval(function() {
			if (bounds.height < notiferHeight) {
				bounds.height += 10;
				notifer.setBounds(bounds);
			} else {
				clearInterval(timer);
				next && next();
			}
		}, 3);
	},

	hide: function(next) {
		var timer = this.timer;
		clearInterval(timer);
		var bounds = notifer.getBounds();
		timer = setInterval(function() {
			if (bounds.height > 0) {
				bounds.height -= 10;
				notifer.setBounds(bounds);
			} else {
				clearInterval(timer);
				notifer.hide();
				console.log('[notifer] clear and hide');
				next && next();
			}
		}, 10);
	}
};

let notifer = null;

function init() {
	// Get main display size
	const display = getDisplay();
	const displaySize = display.size;

	// Create notification window
	notifer = new BrowserWindow({
		width: displaySize.width,
		height: 0, //notiferHeight,
		x: display.bounds.x,
		y: display.bounds.y,
		transparent: true,
		frame: false,
		alwaysOnTop: true,
		show: false,
		resizable: false,
		skipTaskbar: true,
		type: 'desktop',

	});

	// Cancel closed notifer
	notifer.on('close', function(e) {
		// e.preventDefault();
	});

	notifer.loadURL('file://' + __dirname + '/page/notifer.html');

	// notifer.webContents.openDevTools()


	ipc.on('yaplayer:win-notification:hide-immediately', function() {
		clearTimeout(intId);
		var bounds = notifer.getBounds();
		bounds.height = 0;
		notifer.setBounds(bounds);
		notifer.hide();
	});
}






let mainWindows = null;
let intId = null;

const winNotification = {

	// Configure notifier
	configure(win) {
		if (mainWindows) {
			return null;
		}
		mainWindows = win;
		init();
	},

	// show notification methos
	show(track) {
		clearTimeout(intId);
		notifer.webContents.send('yaplayer:win-notification:show', track);
		animation.show(function() {
			intId = setTimeout(function() {
				notifer.webContents.send('yaplayer:win-notification:hide');
				animation.hide();
			}, 3000);
		});
	}
};


module.exports = winNotification;