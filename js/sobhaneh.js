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
	var title = $(this).attr("data-title");
	getPaperData(pid,date_id,title);
});

$(document).on('pageshow', '#apaper', function() {
	

});

$(document).on('click', '#apaper #side-pages ul li', function() {
	var id = $(this).attr("data-id");
	alert(id);
});