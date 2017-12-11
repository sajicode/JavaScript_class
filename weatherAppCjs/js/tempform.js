var sb = require("./sandbox.js");

var id, temperature, el, convert;

id = "convert";

function init() {
    el = document.getElementById("convert");
    temperature = el.getElementsByClassName("temp")[0];
    convert = el.getElementsByClassName("submit")[0];

    $on(convert, "click", convertTemp);

    sb.listen({ "showUp": showForm }, id);
}

function convertTemp(e) {

    var tempDetails = {};
    tempDetails.temperature = temperature.value;

    var fahren = (temperature.value * 1.8) + 32
    tempDetails.fahrenheit = fahren;

    sb.notify({
        type: "converted",
        data: tempDetails
    })

    el.classList.toggle("module-active");

    e.preventDefault();
}

function showForm() {

    el.classList.toggle("module-active");
}

module.exports.id = id;
module.exports.init = init;
module.exports.convertTemp = convertTemp;
