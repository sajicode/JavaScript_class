window.$on = function (target, type, cb) {
    target.addEventListener(type, cb, false);
}

define(["./core", "./tempform", "./tempview"], function(CORE, tempForm, tempView) {

    CORE.addModule(tempForm.id, tempForm);
    CORE.addModule(tempView.id, tempView);

    tempForm.init();
    tempView.init();

})