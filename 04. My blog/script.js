var searchBtn = document.getElementsByClassName("fas fa-search");
var searchTxt = document.getElementsByClassName("search-txt");

searchBtn.onclick() = function () {
	
	if (searchTxt.className == "open") {
		//shrink the box
		searchTxt.className = "";
	} else {
		//expand the box
		searchTxt.className = "open";
	}
}



var counter = 1;
setInterval(function(){
	document.getElementById('radio-btn' + counter).checked = true;
	counter++;
	if(counter > 5) {
		counter = 1;
	}
}, 5000);

