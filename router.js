function route(handle, pathname, postData, res){
	console.info("About to route a request for " + pathname);
	if("function"==typeof handle[pathname]){
		handle[pathname](postData, res);
	}else{
		console.info("No request handler found for " + pathname);
		res.writeHead(404,{"Content-type":"text/plain"});
		res.write("404 Not found!");
		res.end();
	}
}

exports.route = route;