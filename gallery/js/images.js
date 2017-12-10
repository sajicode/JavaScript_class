var sb = require("./sandbox.js");

var id, thumbs, attr, href;

id = "pictures";

function init() {

    thumb = document.getElementById("thumbs");
    attr = thumb.getElementsByTagName("a");

    for (var i = 0; i < attr.length; ++i) {
        $on(attr[i], 'click', reverse);
    }

}

function reverse(e) {

    href = this.getAttribute('href');

    sb.notify({ type: 'notify-board', data: href })

    e.preventDefault();
}

module.exports.id = id;
module.exports.init = init;
module.exports.reverse = reverse;
