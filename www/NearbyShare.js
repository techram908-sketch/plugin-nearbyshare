var exec = cordova.require('cordova/exec');

var NearbyShare = {
    shareText: function(text, success, error) {
        exec(success || function(){}, error || function(){}, "NearbyShareCordova", "shareText", [text]);
    },
    
    // Polling wrapper
    waitForPlugin: function(callback) {
        var attempts = 0;
        var maxAttempts = 20; // max 20 tries (~10 seconds if interval = 500ms)
        var interval = 500; // check every 500ms

        var checkPlugin = setInterval(function() {
            if (typeof NearbyShare !== "undefined" && cordova && cordova.exec) {
                clearInterval(checkPlugin);
                callback(); // plugin is ready, run your code
            } else if (attempts >= maxAttempts) {
                clearInterval(checkPlugin);
                console.error("NearbyShare plugin not loaded after waiting.");
            }
            attempts++;
        }, interval);
    }
};

// Make global
window.NearbyShare = NearbyShare;
