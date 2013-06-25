function getDayPapers(day, elm, scid) {
	$.mobile.showPageLoadingMsg();
	$.ajax({
		type : "POST",
		data : {
			offset : day
		},
		url : "http://eboard.ir/sobhaneh/main/getLastDayPapers/",
		dataType : "json",
		async : true,
		success : function(data) {
			getDayPapersCallback(data, elm, scid);
			$.mobile.hidePageLoadingMsg();
		},
		error : function(data) {
		}
	});
}

function getDayPapersCallback(data, elm, scid) {
	var imgSrc = "";
	$(elm).empty();
	for (var x in data) {
		var folder = 'sobhaneh/' + data[x]["date_id"] + '/';
		var src = data[x]["image"];
		imgSrc = src;

		//-----------------------------------
		var rootAddress = getRootAddress();
		//alert(rootAddress);
		createFolder(folder);
		if (!file_exists(rootAddress + 'sobhaneh/' + data[x]["date_id"] + "/" + data[x]["image_name"])) {
			downloadFile(folder, src, data[x]["image_name"]);
			imgSrc = src;
		} else {
			imgSrc = rootAddress + data[x]["date_id"] + "/" + data[x]["image_name"];
		}
		//-----------------------------------

		for ( i = 1; i < 20; i++) {
			$(elm).append("<li data-date='" + data[x]["date_id"] + "' data-pid='" + data[x]["id"] + "'><img src='" + imgSrc + "' /><h1>" + data[x]["title"] + "</h1></li>");
		}
	}
	var count = $(elm + " li").length;
	var width = count * (parseInt($(elm + " li").width()) + 24);

	$("#home .scroller" + scid).css({
		"width" : width + "px"
	});
	new IScroll('#home .scroller-wrapper' + scid, {
		scrollX : true,
		scrollY : false,
		mouseWheel : true
	});

	$(elm).imageready(function() {
		$(elm).fadeIn();
	});

}

//=====================================================================================================
function showPaper(pid, date_id) {
	var folder = 'sobhaneh/' + date_id + '/' + pid + '/';
	var rootAddress = getRootAddress();
	createFolder(folder);
	var fc = file_get_contents(rootAddress + folder + 'paper.json');
	console.log(fc);
	
	if (!file_exists(rootAddress + folder + 'paper.json')) {
		var src = "http://eboard.ir/sobhaneh/main/getPaper/"+pid+"/"; 
		downloadFile(folder, src, 'paper.json');				
	} else {
		alert('OK!');
	}
}
