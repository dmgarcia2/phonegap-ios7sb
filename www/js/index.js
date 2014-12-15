"use strict";

var application = {};

application.app = {
	
    initialize: function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
    	if (device.platform === 'iOS' && parseInt(device.version) === 7) {
			StatusBar.overlaysWebView(false);
			StatusBar.backgroundColorByName("black");
    	}

		FastClick.attach(document.body);
    }

};
