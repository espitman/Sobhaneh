function createFolder(name) {
	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function onFileSystemSuccess(fileSystem) {

		fileSystem.root.getDirectory(name, {
			create : true,
			exclusive : false
		}, function createdDirectory(fileEntry) {
			return true;
		});
	}, fail);
}

function downloadFile(folder, file, name) {
	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function onFileSystemSuccess(fileSystem) {

		fileSystem.root.getFile(folder + "dummy.html", {
			create : true,
			exclusive : false
		}, function gotFileEntry(fileEntry) {
			var sPath = fileEntry.fullPath.replace("dummy.html", "");
			var fileTransfer = new FileTransfer();
			fileEntry.remove();

			fileTransfer.download(file, sPath + name, function(theFile) {
				console.log(">>" + theFile.toURI());
			}, function(error) {
				console.log("download error source " + error.source);
				console.log("download error target " + error.target);
				console.log("upload error code: " + error.code);
			});
		}, fail);
	}, fail);

}


function fail(evt) {
	console.log(evt.target.error.code);
}