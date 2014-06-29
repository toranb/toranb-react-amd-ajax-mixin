define(["promise-mixin"], function(dependency) {
    "use strict";

    var PromiseMixin = dependency["default"] || dependency;

    var AjaxMixin = (function() {
        var mixin = function() {
        };
        mixin.prototype.xhr = function(url, type, hash) {
            hash = hash || {};
            hash.url = url;
            hash.type = type;
            hash.dataType = "json";
            var helper = new PromiseMixin();
            return helper.promise(url, type, hash);
        }
        return mixin;
    })();

    return AjaxMixin;
});
