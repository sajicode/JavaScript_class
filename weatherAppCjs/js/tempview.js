var sb = require("./sandbox.js");

var id, el, list, convert;

id = "converted";

function init() {

    el = document.getElementById("converted");
    list = document.getElementById("tempList");
    convert = el.getElementsByClassName("newTemp")[0];

    sb.listen({ "converted": addTemp }, id);

    $on(convert, "click", closeForm);

}

function addTemp(degree) {

    var li, temp, tempNodeVal;

    li = document.createElement("li");

    temp = document.createElement("p");

    tempNodeVal = document.createTextNode(degree.fahrenheit);

    temp.appendChild(tempNodeVal);

    li.appendChild(temp);

    list.appendChild(li);

    el.classList.toggle("module-active");
}

function closeForm(e) {

    sb.notify({
        type: "showUp",
        data: null
    });
    el.classList.toggle("module-active");
}

module.exports.id = id;
module.exports.init = init;
module.exports.addTemp = addTemp;
module.exports.closeForm = closeForm;
    