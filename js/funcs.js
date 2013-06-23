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
	$("#home ul.papers").empty();
	for(var x in data) {
		var folder = 'sobhaneh/'+data[x]["date_id"]+'/';
		var src = "http://eboard.ir/sobhaneh/papers/"+data[x]["date_id"]+"/"+data[x]["image"];
		alert(rooAddress);
		/*
		createFolder(folder);
		
		if(!file_exists(rooAddress+data[x]["date_id"]+"/"+data[x]["image"])) {
			downloadFile(folder,src,data[x]["image"]);
			imgSrc = src;	
		} else {
			imgSrc = rooAddress+data[x]["date_id"]+"/"+data[x]["image"];
		}
		console.log(imgSrc);
		*/
		
		$("#home ul.papers").append("<li><img src='"+imgSrc+"' /><h1>"+data[x]["title"]+"</h1></li>");
	}
	var count = $("#home ul.papers li").length;
	var width = count * (parseInt($("#home ul.papers li").width())+24);
	$("#home .scroller").css({"width":width+"px"});
	new IScroll('#home .scroller-wrapper', { scrollX: true, scrollY: false, mouseWheel: true });
	$("ul.papers").imageready(function () {
		$.mobile.hidePageLoadingMsg();
		$('ul.papers').fadeIn();
	});
}
