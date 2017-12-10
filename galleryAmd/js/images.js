define(["./sandbox"], function(sb) {

	var thumbs, attr, id, href;

	id = 'pictures';

	function init() {
		thumbs = document.getElementById('thumbs');
		attr = thumbs.getElementsByTagName('a');

		for(var i=0; i < attr.length; i++) {
			$on(attr[i], 'click', reverse);
		}

	}

	function reverse(e) {

			href = this.getAttribute('href');
			sb.notify({type: 'notify-board', data: href});

			e.preventDefault();
		}

	
	return {
		id: id,
		init: init,
		reverse: reverse
	}
})
	