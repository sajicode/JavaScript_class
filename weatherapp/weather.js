window.$on = function (target, type, cb) {
    target.addEventListener(type, cb, false);
}

var CORE = (function() {

    "use strict";

    var modules = {};

    function addModule(module_id, mod) {

        modules[module_id] = mod;
    }

    function registerEvents(evt, module_id) {

        var theMod = modules[module_id];
        theMod.events = evt;
    }

    function triggerEvents(evt) {

        var mod;
        for(mod in modules) {
            if(modules.hasOwnProperty(mod)) {
                mod = modules[mod];
                if(mod.events && mod.events[evt.type]) {
                    mod.events[evt.type](evt.data);
                }
            }
        }
    }

    return {
        addModule: addModule,
        registerEvents: registerEvents,
        triggerEvents: triggerEvents
    }
}());

var sb = (function() {

    function listen(evt, module_id) {
        CORE.registerEvents(evt, module_id)
    }

    function notify(evt) {
        CORE.triggerEvents(evt);
    }

    return {
        listen: listen,
        notify: notify
    }
}());

var tempForm = (function() {

    var id, temperature, el, convert;

    id = "convert";

    function init() {
        el = document.getElementById("convert");
        temperature = el.getElementsByClassName("temp")[0];
        convert = el.getElementsByClassName("submit")[0];

        $on(convert, "click", convertTemp);

        sb.listen({"showUp": showForm}, id);
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

    return {
        id: id,
        init: init,
        convertTemp: convertTemp
    }
}());

var tempView = (function() {

    var id, el, list, convert;

    id = "converted";

    function init() {

        el = document.getElementById("converted");
        list = document.getElementById("tempList");
        convert = el.getElementsByClassName("newTemp")[0];

        sb.listen({"converted": addTemp}, id);

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

    return {
        id: id,
        init: init,
        addTemp: addTemp,
        closeForm: closeForm
    }
}());

CORE.addModule(tempForm.id, tempForm);
CORE.addModule(tempView.id, tempView);

tempForm.init();
tempView.init();