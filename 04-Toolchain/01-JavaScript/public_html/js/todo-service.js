/*global console:false, $: false */
/*jslint jquery: true */
(function (global) {
    "use strict";
    var ToDoService = function (url, user, password) {
        this.url = url;
        this.user = user;
        this.password = password;
    };
    ToDoService.prototype.getAll = function (callback) {
        var url = this.url;
        $.ajax({
            url: this.url + "todo",
            headers: {
                "Authorization": "Basic " + btoa(this.user + ":" + this.password)
            },
            success: function (todos) {
                callback(todos);
            },
            error: function (e) {
                console.error("calling " + url + " failed with status: ", e.status);
            }
        });
    };
    ToDoService.prototype.get = function (id, callback) {

    };
    global.ToDoService = ToDoService;
}(this));