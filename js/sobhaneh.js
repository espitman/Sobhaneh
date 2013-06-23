$(document).on('pageshow', '#home', function() {
	$.mobile.showPageLoadingMsg();
	getDayPapers();	
	
});