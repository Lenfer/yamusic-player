'use strict';

var DIVNAME = 'yaplayer-ui-indicate-block';

function render() {
	var ipc = require('electron').ipcRenderer;
	var div = window[DIVNAME] = document.createElement('div');
	document.body.appendChild(div);
	div.style.cssText = [
		'font: 11px Arial,Helvetica,sans-serif',
		'color: #888',
		'margin: 31px',
		'line-height: 18px'
	].join(';');
	div.innerHTML = 'Loading...<br>';
	ipc.on('remote:scripting:indicate', function(e, data) {
		div.innerHTML += '- ' + data + '<br>';
	});
}

function init(browserWindow) {
	var content = browserWindow.webContents;
	content.executeJavaScript(['(', render.toString()
		.replace('DIVNAME', '"' + DIVNAME + '"'), ')()'].join(''));
	return function() {
		// content.executeJavaScript('document.body.removeChild(window["' + DIVNAME + '"]);');
	};
}

module.exports = init;
