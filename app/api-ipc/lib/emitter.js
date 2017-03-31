'use strict';

console.info('[Client IPC API] Emitter initing...', enviroment);
var ipc = require('electron').ipcRenderer;
var api = externalAPI;

// emit ipc message on track changed
api.on(api.EVENT_TRACK, function() {
	var track = api.getCurrentTrack();
	track.nextTrack = api.getNextTrack();
	track.prevTrack = api.getPrevTrack();
	ipc.send('api:emitter:track', track);
});

// emit ipc message on progress changed
api.on(api.EVENT_PROGRESS, function() {
	ipc.send('api:emitter:progress', api.getProgress());
});
