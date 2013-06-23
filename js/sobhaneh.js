document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

$(document).on('pageshow', '#home', function() {

	$.mobile.showPageLoadingMsg();
	getDayPapers();
	
	
}); 

