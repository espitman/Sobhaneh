document.addEventListener('touchmove', function(e) {
	e.preventDefault();
}, false);

document.addEventListener('deviceready', function(e) {
	createFolder('sobhaneh');
}, false);

$(document).on('pageshow', '#home', function() {

	$.mobile.showPageLoadingMsg();
	getDayPapers();

});

