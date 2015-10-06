var _ = require('lodash');
var Vow = require('vow');
var path  = require('path');
var app = require('app');
var ipc = require('ipc');
var BrowserWindow = require('browser-window');
var scriptInject = require('yaplayer-script-inject');

require('crash-reporter').start();


// Wait while yaplayer-api-irp:reciever will be released on bond
ipc.on('api:receiver:saveme', function(event) {
	// Mount global hotkeys
	require('yaplayer-hotkeys')(event.sender);
});



var win = null;

app.on('window-all-closed', function() {
	if (process.platform != 'darwin') {
		app.quit();
	}
});

app.on('ready', function() {
	// Create the browser window.
	win = new BrowserWindow({
		width: 1024,
		height: 768,
		'web-preferences': {
			// javascript: false
			// preload: path.join(__dirname, 'preload-fix.js')
		}
	});

	// Emitted when the window is closed.
	win.on('closed', function() {
		win = null;
	});

	// Init Dev utils.
	require('yaplayer-dev')(win);

	// Init Yandex music application
	initYandexMusicApp(win)
	.then(function() {
		// Init yaPlayer Application
		loadPlayer(win).then(function() {
			console.info('[app] Application init - OK.');
		});
	});

	// load yandex music page
	win.loadUrl('https://music.yandex.ru');

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

