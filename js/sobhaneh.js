var iNav = new navigation();

$(document).on('pageshow', 'div[data-role="page"]', function() {
	var currentPage = ($(this).attr("id"));
	iNav.push(currentPage);
});

$(document).on('click', '#button_back', function() {
	$.mobile.changePage("#"+iNav.pop(), {
		transition : "slide"
	});
	
	return false;
});

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
	getPageTitles(id);
});

$(document).on('click', '#apaper #main-pages ul.titles li', function() {
	var id = $(this).attr("data-id");
	getNews(id);
});