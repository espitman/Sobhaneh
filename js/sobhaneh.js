document.addEventListener('touchmove', function(e) {
	e.preventDefault();
}, false);

document.addEventListener('deviceready', function(e) {
	createFolder('sobhaneh');
}, false);

$(document).on('pageshow', '#home', function() {
	$.mobile.showPageLoadingMsg();
	getDayPapers(0,"#home ul.papers",1);
	getDayPapers(1,"#home ul.papers2",2);

});

$(document).on('click', '#home .box li', function() {
	var date_id = $(this).attr("data-pid");
	var pid = $(this).attr("data-pid");
	getPaperData(pid,date_id);
});

$(document).on('pageshow', '#apaper', function() {
	

});