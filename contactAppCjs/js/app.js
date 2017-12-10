window.$on = function (target, type, cb) {

    target.addEventListener(type, cb, false);
}

var CORE = require("./core.js"),
    contactForm = require("./contactForm.js"),
    contactDirectory = require("./contactDirectory.js")

CORE.addModule(contactForm.id, contactForm);
CORE.addModule(contactDirectory.id, contactDirectory);

contactForm.init();
contactDirectory.init();