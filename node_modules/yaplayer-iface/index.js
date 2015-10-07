'use strict';

module.exports = function(browserWindow) {
	require('./lib/progress-bar')(browserWindow);
	require('./lib/notification')(browserWindow);
}
