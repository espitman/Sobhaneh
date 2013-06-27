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
		/*
		var rootAddress = getRootAddress();
		//alert(rootAddress);
		createFolder(folder);
		if (!file_exists(rootAddress + 'sobhaneh/' + data[x]["date_id"] + "/" + data[x]["image_name"])) {
		downloadFile(folder, src, data[x]["image_name"]);
		imgSrc = src;
		} else {
		imgSrc = rootAddress + data[x]["date_id"] + "/" + data[x]["image_name"];
		}
		*/
		//-----------------------------------

		for ( i = 1; i < 20; i++) {
			$(elm).append("<li data-title='" + data[x]["title"] + "' data-date='" + data[x]["date_id"] + "' data-pid='" + data[x]["id"] + "'><img src='" + imgSrc + "' /><h1>" + data[x]["title"] + "</h1></li>");
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
function getPaperData(pid, date_id, title) {
	$.mobile.showPageLoadingMsg();
	/*
	 var folder = 'sobhaneh/' + date_id + '/' + pid + '/';
	 var rootAddress = getRootAddress();
	 createFolder(folder);
	 var fc = file_get_contents(rootAddress + folder + 'paper.json');

	 if (!fc) {
	 var src = "http://eboard.ir/sobhaneh/main/getPaper/" + pid + "/";
	 downloadFile(folder, src, 'paper.json');
	 fc = file_get_contents(rootAddress + folder + 'paper.json');
	 } else {
	 //alert('OK!');
	 }

	 fc = JSON.parse(fc);
	 */
	$.ajax({
		type : "POST",
		url : "http://eboard.ir/sobhaneh/main/getPaper/" + pid + "/",
		dataType : "json",
		async : true,
		success : function(data) {
			showPaper(data, title);
		},
		error : function(data) {
		}
	});

}

function showPaper(data, title) {
	$("#apaper h1.ui-title").html(title);
	$("#apaper #side-pages ul").empty();
	$("#apaper #main-pages ul").empty();
	for (var x in data) {
		for ( i = 1; i < 20; i++) {
			$("#apaper #side-pages ul").append("<li data-id='" + data[x]["id"] + "'><img src='" + data[x]["image"] + "' /><h1>" + data[x]["title"] + "</h1></li>")
		}
	}

	$.mobile.changePage($("#apaper"), {
		transition : "slide"
	});

	var vh = parseInt($(window).height());
	var hh = parseInt($(".ui-header").height());
	var dif = vh - hh;
	$("#side-pages,#main-pages").css({
		"height" : (dif - 60) + "px",
		"margin-top" : (hh + 30) + "px"
	});

	var vw = parseInt($(window).width());
	var sw = parseInt($("#side-pages").width());
	var dif = vw - sw;
	$("#main-pages").css({
		"width" : (dif - 30) + "px",
	});

	var elm = "#apaper ul";
	var count = $(elm + " li").length;
	var height = count * (parseInt($(elm + " li").height()) + 20);

	$("#apaper .scroller3").css({
		"height" : height + "px"
	});
	new IScroll('#apaper #side-pages', {
		scrollX : false,
		scrollY : true,
		mouseWheel : true
	});

	$.mobile.hidePageLoadingMsg();
}

//=====================================================================================================
function getPageTitles(pageId) {
	$.mobile.showPageLoadingMsg();
	$.ajax({
		type : "POST",
		url : "http://eboard.ir/sobhaneh/main/getPageNews/" + pageId + "/",
		dataType : "json",
		async : true,
		success : function(data) {
			showPageTitles(data);
		},
		error : function(data) {
		}
	});
}

function showPageTitles(data) {
	$("#apaper #main-pages ul.titles").empty();
	for (var x in data) {
		$("#apaper #main-pages ul.titles").append("<li data-id='" + data[x]["id"] + "'>" + data[x]["title"] + "</li>")
	}
	$.mobile.hidePageLoadingMsg();
}

//=====================================================================================================s
function getNews(id) {
	$.mobile.showPageLoadingMsg();
	$.ajax({
		type : "POST",
		url : "http://eboard.ir/sobhaneh/main/getNews/" + id + "/",
		dataType : "json",
		data : {
			id : id
		},
		async : true,
		success : function(data) {
			showNews(data);
		},
		error : function(data) {
		}
	});
}

function showNews(data) {
	console.log(data);
	$.mobile.changePage($("#anews"), {
		transition : "slide"
	});	
	$("#anews .mcontent").empty();
	$("#anews .mcontent").append("<h2>"+data[0]["up_title"]+"</h2>");
	$("#anews .mcontent").append("<h1>"+data[0]["title"]+"</h1>");
		
	$.mobile.hidePageLoadingMsg();
}
