(function() {
    var NearbyShare = {
        shareText: function(text, success, error) {
            if (!window.cordova || !cordova.exec) {
                console.warn("Cordova not ready yet");
                if (error) error("Cordova not ready");
                return;
            }
            cordova.exec(success || function(){}, error || function(){}, "NearbyShareCordova", "shareText", [text]);
        }
    };

    // Wait for deviceready before exposing globally
    function onReady() {
        window.NearbyShare = NearbyShare;
        console.log("NearbyShare plugin loaded");
    }

    if (window.cordova) {
        document.addEventListener("deviceready", onReady, false);
    } else {
        // If running in browser preview, still expose a dummy object
        window.NearbyShare = {
            shareText: function(text, success, error) {
                console.log("NearbyShare called in browser preview: " + text);
                if (success) success();
            }
        };
    }
})();
