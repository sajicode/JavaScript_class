window.$on = function(target, type, cb) {
	target.addEventListener(type, cb, false);
}

define(["./core", "./images", "place"], function(CORE, images, place) {

	CORE.addModule(images.id, images);
	CORE.addModule(place.id, place);

	images.init()
	place.init()

})