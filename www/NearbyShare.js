var exec = require('cordova/exec');

var NearbyShare = {
  shareText: function(text, success, error) {
    exec(success || function(){}, error || function(){}, "NearbyShareCordova", "shareText", [text]);
  }
};

module.exports = NearbyShare;
