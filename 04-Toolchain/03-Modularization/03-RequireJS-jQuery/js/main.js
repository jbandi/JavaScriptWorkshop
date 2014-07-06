
// Configuration for requirejs
require.config({
//    "baseUrl": "js/lib",
    "paths": {
//        "app": "../app",
        "jquery": "//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min"
    },
    map: {
        // '*' means all modules will get 'jquery-private'
        // for their 'jquery' dependency.
        '*': { 'jquery': 'jquery-private' },

        // 'jquery-private' wants the real jQuery module
        // though. If this line was not here, there would
        // be an unresolvable cyclic dependency.
        'jquery-private': { 'jquery': 'jquery' }
    }
});

// Define the module jquery-private as a jQuery with no-conflict
define('jquery-private',['jquery'], function (jq) {
    return jq.noConflict( true );
});

// Load the main app module to start the app
require(["app"]);