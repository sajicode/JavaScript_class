//rogueTwo JavaScript
//create advert-like page
/*var msg = '<div><p>Hello World!</p>';
msg += '<a href="#" id = \"close\"><img src = \"images/ninja\"/></a></div>';
		
//create new element
var firstPage = document.createElement('<div>');
firstPage.setAttribute('id', 'note');
firstPage.innerHTML = msg;
document.body.appendChild(firstPage);

var msg = '<div class = \"advert\"><a id = \"close\" href = "#">close X</a></div>';
msg += '<div><h2>ADVERTS</h2>';
msg+= 'Ghen Ghen, so this is how developers bombard our browsing experience with ads! ';
msg+= 'Developers own the future!</div>';

var advert = document.createElement('div');
advert.setAttribute('id','note'); 
advert.innerHTML = msg;
document.body.appendChild(advert);*/

$(function() {
	
	//using slide toggle to show items
	$('.hideForce').hide();
	
	$('#theForce').on('click', function(e) {
		e.preventDefault();
		$('.hideForce').toggle().each(function(index) {
			$(this).delay(500 * index).toggleClass('force');
		});
	});
	
	//check the length of input
	var $username = $('#username');
	$username.on("blur", function() {
		var $usernameVal = $('input:text');
		var $usernameTip = $('#tip1');
	
		if($usernameVal.val().length < 8) {
			$usernameTip.html("Username should be at least 8 characters");
		} else {
			$usernameTip.html('');
		}
	});
	
	var $password = $('#password');
	$password.on("blur", function() {
		var $passwordVal = $('input:password');
		var $passwordTip = $('#tip2');
	
		if($passwordVal.val().length < 10) {
			$passwordTip.html("password should be at least 10 characters");
		} else {
			$passwordTip.html('');
		}
	});
	
	//Actions for name bar
	
	var $showName, $sidebarItems, $nameButton, $nameInput, $nameForm;
	$showName = $('#showName');
	$sidebarItems = $('#sidebarItems');
	$nameButton = $('#nameButton');
	$nameInput = $('#nameInput');
	$nameForm = $('#nameForm');
	
	$nameButton.show();
	$nameForm.hide();
	$showName.on('click', function() {
		$nameButton.hide();
		$nameForm.show();
	});
	
	$nameForm.on('submit', function(e) {
		e.preventDefault();
		var names = $('#nameDetails').val();
		$nameInput.append(' ' + names);
		$nameButton.hide();
		$nameForm.hide();
	});
	
	//Actions for nickname bar
	var $showNickame, $nicknameButton, $nicknameInput, $nicknameForm;
	$showNickname = $('#showNickname');
	$nicknameButton = $('#nicknameButton');
	$nicknameInput = $('#nicknameInput');
	$nicknameForm = $('#nicknameForm');
	
	$nicknameButton.show();
	$nicknameForm.hide();
	$showNickname.on('click', function() {
		$nicknameButton.hide();
		$nicknameForm.show();
	});
	
	$nicknameForm.on('submit', function(e) {
		e.preventDefault();
		var nicknames = $('#nicknameDetails').val();
		$nicknameInput.append(' ' + nicknames);
		$nicknameButton.hide();
		$nicknameForm.hide();
	});
	
	/*function for datepicker. Didn't want to use html datepicker
	cos i felt it was too straightforward and simple-looking*/
	var date = $('#datepicker').datepicker({dateFormat: 'dd-mm-yy'});
	$('#dobForm').on('submit', function(e) {
		e.preventDefault();
		$('#dobInput').append(' ' + date.val());
		$('#datepicker').hide();
		$('#addDob').hide();
	});
	
	//actions for language bar
	var $showLang, $langButton, $langInput, $langForm;
	$showLang = $('#showLang');
	$langButton = $('#langButton');
	$langInput = $('#langInput');
	$langForm = $('#langForm');
	
	$langButton.show();
	$langForm.hide();
	$showLang.on('click', function() {
		$langButton.hide();
		$langForm.show();
	});
	
	$langForm.on('submit', function(e) {
		e.preventDefault();
		var languages = $('#langDetails').val();
		$langInput.append(' ' + languages);
		$langButton.hide();
		$langForm.hide();
	});
	
	var $showGit, $gitButton, $gitInput, $gitForm;
	$showGit = $('#showGit');
	$gitButton = $('#gitButton');
	$gitInput = $('#gitInput');
	$gitForm = $('#gitForm');
	
	$gitButton.show();
	$gitForm.hide();
	$showGit.on('click', function() {
		$gitButton.hide();
		$gitForm.show();
	});
	
	$gitForm.on('submit', function(e) {
		e.preventDefault();
		var git = $('#gitDetails').val();
		$gitInput.append(' ' + git);
		$gitButton.hide();
		$gitForm.hide();
	});
	
	var $showLink, $linkButton, $linkInput, $linkForm;
	$showLink = $('#showLink');
	$linkButton = $('#linkButton');
	$linkInput = $('#linkInput');
	$linkForm = $('#linkForm');
	
	$linkButton.show();
	$linkForm.hide();
	$showLink.on('click', function() {
		$linkButton.hide();
		$linkForm.show();
	});
	
	$linkForm.on('submit', function(e) {
		e.preventDefault();
		var linked = $('#linkDetails').val();
		$linkInput.append(' ' + linked);
		$linkButton.hide();
		$linkForm.hide();
	});
	
	$('#ideaDetails').hide();
	$('#sampleDetails').hide();
	
	//function for clicking 'sample'
	$('#sample').on('click', function() {
		$('#profileDetails').fadeOut(500);
		$('#ideaDetails').fadeOut(500);
		$('#sampleDetails').fadeIn(1000);
	});
	
	//function for clicking 'profile'
	$('#profile').on('click', function() {
		$('#sampleDetails').fadeOut(500);
		$('#ideaDetails').fadeOut(500);
		$('#profileDetails').fadeIn(1500);
	});
	
	//function for clicking 'ideas?'
	
	$('#ideas').on('click', function() {
		$('#sampleDetails').fadeOut(500);
		$('#profileDetails').fadeOut(500);
		$('#ideaDetails').fadeIn(1500);
	});
	
	
	

	
	
});