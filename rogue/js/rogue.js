//rogue JavaScript

var giveTip, useTip;

giveTip = document.getElementById("connecthint2");

function tip() {
	giveTip.innerHTML = "TELEPORT!"
}

useTip = document.getElementById("itemconnect")

useTip.addEventListener("click", tip, false);

var hint = document.getElementById("connecthint");

function itemHint() {
	var selection = this.options[this.selectedIndex].value;
	if (selection === "twitter") {
		hint.innerHTML = '<a href = "https://www.twitter.com/sajioloye/" target = "_blank">tweet tweet bird</a>';
	} else if (selection === "instagram") {
		hint.innerHTML = '<a href = "https:www.instagram.com/fola_banjo" target = "_blank">picture go</a>';
	} else {
		hint.innerHTML = '<a href = "https://www.facebook.com/banjo.adams/" target = "_blank">Zuckerberg</a>';
	}
}

var media = document.getElementById("media");

media.addEventListener("change", itemHint, false);

var images = ["images/dr_seuss.jpg","images/angrybirds.jpg", "images/tbbt.jpg", "images/garfield.jpg", "images/work.jpg"];
var num = 0;

function next() {
	var slider = document.getElementById("slider");
	num++;
	if (num >= images.length) {
		num = 0;
	}
	slider.src = images[num];
}
setInterval(next, 3000);

function previous() {
	var slider = document.getElementById("slider");
	num--;
	if (num < 0) {
		num = images.length - 1;
	}
	slider.src = images[num];
}

var prev, nxt;

prev = document.getElementById("prev");
nxt = document.getElementById("nxt");

prev.addEventListener("click", previous, false);
nxt.addEventListener("click", next, false);

var msg = '<div class = \"advert\"><a id = \"close\" href = "#">close X</a></div>';
msg += '<div><h2>ADVERTS</h2>';
msg+= 'Ghen Ghen, so this is how developers bombard our browsing experience with ads! ';
msg+= 'Developers own the future!</div>';

var advert = document.createElement('div');
advert.setAttribute('id','note'); 
advert.innerHTML = msg;
document.body.appendChild(advert);

function dismissNote() {
	document.body.removeChild(advert);
}

var elClose = document.getElementById("close");
elClose.addEventListener("click", dismissNote, false);


var time = document.getElementById("time");

function printTime() {
	var d = new Date();
	var hours = d.getHours();
	var mins = d.getMinutes();
	var secs = d.getSeconds();
	time.innerHTML = hours + ':' + mins + ':' + secs;
}
setInterval(printTime, 1000);

function about() {
	alert("Just a sample project about a total novice trying to make it in the world of programming");
}

var info = document.getElementById("info");
info.addEventListener("click", about, false);

//adding alert box 
var post = document.getElementById("submit-btn");
function submission() {
	alert("Thank you for dropping that. Your views are of immense value. Cheers!");
};
post.addEventListener("click", submission, false);



