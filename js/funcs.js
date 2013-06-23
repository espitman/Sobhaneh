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
	console.log(data);
	$("#home ul.papers").empty();
	for(var x in data) {
		$("#home ul.papers").append("<li><img src='"+data[x]["image"]+"' /><h1>"+data[x]["title"]+"</h1></li>");
	}
	
}
