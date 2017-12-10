window.$on = function(target, type, cb) {

    target.addEventListener(type, cb, false);
}

var CORE = (function(){

    "use strict";

    //keep track of modules
    var modules = {};

    function addModule(module_id, mod) {
        modules[module_id] = mod;
    }

    function registerEvents(evt, module_id) {
        var theMod;

        theMod = modules[module_id];
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

var sb = (function(){

    function listen(evt, module_id) {
        CORE.registerEvents(evt, module_id);
    }

    function notify(evt) {
        CORE.triggerEvents(evt);
    }

    return {
        listen: listen,
        notify: notify
    }
}());

var images = (function() {

    var id, thumbs, attr, href;

    id = "pictures";

    function init() {

        thumb = document.getElementById("thumbs");
        attr = thumb.getElementsByTagName("a");

        for(var i = 0; i < attr.length; ++i) {
            $on(attr[i], 'click', reverse);
        }

    }

    function reverse(e) {

        href = this.getAttribute('href');

        sb.notify({ type: 'notify-board', data:href })

        e.preventDefault();
    }

    return {
        id: id,
        init: init,
        reverse: reverse
    }

}());

var place = (function() {

    var id, show;

    id = "change";

    function init() {
        
        sb.listen({'notify-board': show}, id);
    }

    function show(href) {

        var board = document.getElementById('placeholder');
        var mainImg = board.childNodes[0];
        mainImg.setAttribute('src', href);
    }

    return {
        id: id,
        init: init,
        show: show
    }

}())

CORE.addModule(images.id, images);
CORE.addModule(place.id, place);

images.init();
place.init();