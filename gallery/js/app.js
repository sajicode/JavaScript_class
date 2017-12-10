window.$on = function(target, type, cb) {

    target.addEventListener(type, cb, false);

}

var CORE = require("./core.js"),
    images = require("./images.js"),
    place = require("./place.js")

CORE.addModule(images.id, images);
CORE.addModule(place.id, place);

images.init();
place.init();