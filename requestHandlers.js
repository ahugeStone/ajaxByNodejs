function start(postData, res){
	console.log("Handler 'start' called"+postData);
	
	var strreq = decodeURIComponent(postData).substring(5);
	res.writeHead(200,{"Content-type":"text/javascript"});
	res.write(strreq);	
	//res.end(JSON.stringify(strreq));
	res.end();
}
function upload(postData, res){
	console.log("Handler 'upload' called"+postData);
	res.writeHead(200,{"Content-type":"text/plain"});
	res.write("upload!"+postData);
	res.end()
}

exports.start = start;
exports.upload = upload;