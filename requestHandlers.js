function start(postData, res){
	console.log("Handler 'start' called"+postData);
	res.writeHead(200,{"Content-type":"text/plain"});
	//res.write(postData);
	res.end(JSON.stringify({data:decodeURI(postData)}));
}
function upload(postData, res){
	console.log("Handler 'upload' called"+postData);
	res.writeHead(200,{"Content-type":"text/plain"});
	res.write("upload!"+postData);
	res.end({data:postData})
}

exports.start = start;
exports.upload = upload;