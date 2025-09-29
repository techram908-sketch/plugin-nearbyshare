(function(){
    var exec = cordova.require('cordova/exec');

    var NearbyShare = {
        shareText: function(text, success, error) {
            function callPlugin() {
                exec(success || function(){}, error || function(){}, "NearbyShareCordova", "shareText", [text]);
            }

            if (window.cordova && window.cordova.exec) {
                // Cordova already ready
                callPlugin();
            } else {
                // Wait for deviceready
                document.addEventListener("deviceready", callPlugin, false);
            }
        }
    };

    window.NearbyShare = NearbyShare; // Expose globally
})();
