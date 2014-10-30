var Cortex = require("cortexjs");
var _ = require('underscore');

// this file contains the global oracle for the application's data flow

var oracle = {

  initOracle: function() {
    // initialze data
    var app = {
      app_state: {
        isSidebarShown: false,
        currentView: 'analysis'
      }
    };

    return new Cortex(app);
  }

};

module.exports = oracle;
