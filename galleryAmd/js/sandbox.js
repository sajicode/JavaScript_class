define(["./core"], function(CORE) {

	function listen(evt, module_id) { //wrapping register events
		CORE.registerEvents(evt, module_id);
	}

	function notify(evt) {
		CORE.triggerEvents(evt);
	}

	return {
		listen: listen,
		notify: notify
	}

})