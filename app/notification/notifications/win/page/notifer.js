var ipc = require('electron').ipcRenderer;
var page = {
	body: $('body'),
	cover: $('#coverId'),
	artist: $('#artistId'),
	title: $('#titleId')
};

var defaultCoverUrl = 'https://music.yandex.ru/blocks/common/default.80x80.png';

ipc.on('yaplayer:win-notification:show', function(e, track) {
	// Set track name
	page.title.html(track.title);

	// Set artist name
	var artist = _.map(track.artists, 'title').join(', ');
	page.artist.html(artist);

	// Set cover URL
	var coverUri = track.album.cover;
	var url = coverUri ? [
		'https://',
		coverUri.replace('%%', '80x80')
	].join('') : defaultCoverUrl;
	page.cover.attr('src', url);

	fadeIn();
});

// Hide notification on click
page.body.click(function() {
	ipc.send('yaplayer:win-notification:hide-immediately');
	fadeOut();
});

// On IPC hide signal
ipc.on('yaplayer:win-notification:hide', function() {
	fadeOut();
});


var etalon = page.body
	.css('backgroundColor')
	.replace(/[\d\.]+\)/, '');

var beginAlpha = 0.75;

// set transparent value
function setAlpha(alpha) {
	page.body
		.css({
			opacity: alpha + 0.25,
			backgroundColor: etalon + alpha + ')'
		});
}

// fade out function
function fadeOut() {
	var alpha = beginAlpha;
	var id = setInterval(function() {
		alpha -= 0.1;
		if (alpha >= 0) {
			setAlpha(alpha);
		} else {
			clearInterval(id);
		}
	}, 10);
}

// fade in function
function fadeIn() {
	var alpha = 0;
	var id = setInterval(function() {
		alpha += 0.1;
		if (alpha >= 0.7) {
			setAlpha(alpha);
		} else {
			setAlpha(0.75);
			clearInterval(id);
		}
	}, 10);
}
