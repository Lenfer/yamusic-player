'use strict';

const {app} = require('electron');
const path = require('path');
const join = path.join;
const _ = require('lodash');

const BASE_PATH = join(app.getAppPath(), 'configs');

const OS_MAPPER = {
	darwin: 'macos',
	win32: 'win'
}


let commonCfg = require(join(BASE_PATH, 'common'));
let osCfg = {};

try {
	osCfg = require(join(BASE_PATH, OS_MAPPER[process.platform]));
} catch(e) {
	console.log('No config file for current OS', process.platform);
}

module.exports = _.merge(commonCfg, osCfg);
