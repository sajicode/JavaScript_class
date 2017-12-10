define(["./sandbox"], function(sb) {

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
})
	