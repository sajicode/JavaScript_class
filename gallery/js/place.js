var sb = require("./sandbox.js");

var id, show;

id = "change";

function init() {

    sb.listen({ 'notify-board': show }, id);
}

function show(href) {

    var board = document.getElementById('placeholder');
    var mainImg = board.childNodes[0];
    mainImg.setAttribute('src', href);
}

module.exports.id = id;
module.exports.init = init;
module.exports.show = show;

