'use strict';

const remoteScripting = require('_/remote-scripting');
const remoteExecute = remoteScripting.execute;


// Code for inject notifiction functional on client side
function clientInitNotifier() {
	const defaultCoverUrl = 'https://music.yandex.ru/blocks/common/default.80x80.png';
	const ipc = require('electron').ipcRenderer

	ipc.on('yaplayer:macos-notification:show', (e, track) => {
		// Set artist name
		let artist = _.map(track.artists, 'title').join(', ');

		// Set cover URL
		let coverUri = track.album.cover;
		let url = coverUri ? [
			'https://',
			coverUri.replace('%%', '80x80')
		].join('') : defaultCoverUrl;

		// Create notification message
		new Notification(track.title, {
			body: artist,
			icon: url,
			silent: true
		});
	});
}

let window;
const macNotification = {

	// Configure notifier
	configure(win) {
		if (window) {
			return null;
		}
		window = win;
		remoteExecute(win, clientInitNotifier);
	},

	// show notification methos
	show(track) {
		window.webContents.send('yaplayer:macos-notification:show', track);
	},

	// stub
	hide() {}
};


module.exports = macNotification;
