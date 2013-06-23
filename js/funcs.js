function getDayPapers() {
	$.ajax({
		type : "POST",
		url : "http://boum.ir/test/proxy.php",
		dataType : "html",
		data : {
			url : "http://google.com"
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
	$("#home").html(data);
}
