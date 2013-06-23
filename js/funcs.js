function getDayPapers() {
	$.ajax({
		type : "GET",
		url : "http://eboard.ir/sobhaneh/index.php",
		dataType : "json",
		data : {
			f : "getLastDayPapers"
		},
		async : true,
		success : function(data) {
			getDayPapersCallback(data);
		},
		error : function(data) {
		}
	});
}

function getDayPapersCallback(data) {
	$.mobile.hidePageLoadingMsg();
	$("#home ul.papers").empty();
	for(var x in data) {
		$("#home ul.papers").append("<li><img src='"+data[x]["image"]+"' /><h1>"+data[x]["title"]+"</h1></li>");
	}
	var count = $("#home ul.papers li").length;
	var width = count * (parseInt($("#home ul.papers li").width())+24);
	$("#home .scroller").css({"width":width+"px"});
	new IScroll('#home .scroller-wrapper', { scrollX: true, scrollY: false, mouseWheel: true });
	
}
