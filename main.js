define(["promise-mixin", "exports"], function(__dependency1__, __exports__) {
    "use strict";

    var PromiseMixin = __dependency1__["default"] || __dependency1__;

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

    __exports__["default"] = AjaxMixin;
});
