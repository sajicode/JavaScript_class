window.$on = function (target, type, cb) {
    target.addEventListener(type, cb, false);
}

var CORE = require("./core.js"),
    tempForm = require("./tempform.js"),
    tempView = require("./tempview.js")

CORE.addModule(tempForm.id, tempForm);
CORE.addModule(tempView.id, tempView);

tempForm.init();
tempView.init();
