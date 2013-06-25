function getDayPapers() {
	$.ajax({
		type : "GET",
		url : "http://eboard.ir/sobhaneh/main/getLastDayPapers/",
		dataType : "json",
		async : true,
		success : function(data) {
			getDayPapersCallback(data);
		},
		error : function(data) {
		}
	});
}

function getDayPapersCallback(data) {
	var imgSrc = "";
	$("#home ul.papers").empty();
	var rootAddress = getRootAddress();
	//alert(rootAddress);
	for (var x in data) {
		var folder = 'sobhaneh/' + data[x]["date_id"] + '/';
		var src = data[x]["image"];
		imgSrc = src;
		
		createFolder(folder);

		if (!file_exists(rootAddress + 'sobhaneh/' + data[x]["date_id"] + "/" + data[x]["image_name"])) {
			downloadFile(folder, src, data[x]["image"]);
			imgSrc = src;
		} else {
			imgSrc = rootAddress + data[x]["date_id"] + "/" + data[x]["image_name"];
		}
		console.log(imgSrc);
		$("#home ul.papers").append("<li><img src='" + imgSrc + "' /><h1>" + data[x]["title"] + "</h1></li>");
	}
	var count = $("#home ul.papers li").length;
	var width = count * (parseInt($("#home ul.papers li").width()) + 24);
	$("#home .scroller").css({
		"width" : width + "px"
	});
	new IScroll('#home .scroller-wrapper', {
		scrollX : true,
		scrollY : false,
		mouseWheel : true
	});
	$("ul.papers").imageready(function() {
		$.mobile.hidePageLoadingMsg();
		$('ul.papers').fadeIn();
	});
}
