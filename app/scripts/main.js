/*global listUpdater, $*/
'use strict';


window.listUpdater = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        console.log('Hello from Backbone!');
    }
};

$(document).ready(function () {
    listUpdater.init();
});
