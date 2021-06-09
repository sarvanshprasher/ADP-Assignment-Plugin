// Empty constructor
function AdpAssignmentPlugin() {}

// The function that passes work along to native shells
// Message is a string, duration may be 'long' or 'short'
AdpAssignmentPlugin.prototype.show = function(number, duration, successCallback, errorCallback) {
  var options = {};
  options.number = number;
  options.duration = duration;
  cordova.exec(successCallback, errorCallback, 'AdpAssignmentPlugin', 'show', [options]);
}

// Installation constructor that binds AdpAssignmentPlugin to window
AdpAssignmentPlugin.install = function() {
  if (!window.plugins) {
    window.plugins = {};
  }
  window.plugins.adpAssignmentPlugin = new AdpAssignmentPlugin();
  return window.plugins.adpAssignmentPlugin;
};

cordova.addConstructor(AdpAssignmentPlugin.install);