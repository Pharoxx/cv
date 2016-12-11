// returns what view is currently active, returns string definitions are in sass/0-tools/1-mixins.sass
function getView(){
	if ($("#size_checker").css("font-size") == "1px"){
		return "desktop";
	}else if ($("#size_checker").css("font-size") == "2px"){
		return "tablet";
	}else if ($("#size_checker").css("font-size") == "3px"){
		return "mobile";
	}
}

// Checks if current view is Desktop, returns true or false
function isDesktop(){
	if (getView() == "desktop"){
		return true;
	} else {
		return false;
	}
}

// Checks if current view is Tablet, returns true or false
function isTablet(){
	if (getView() == "tablet"){
		return true;
	} else {
		return false;
	}
}

// Checks if current view is Mobile, returns true or false
function isMobile(){
	if (getView() == "mobile"){
		return true;
	} else {
		return false;
	}
}