var http = require("http");
var url = require("url");


function start(route, handle){
	function onRequest(request, response){
		var postData = "";
		var pathname = url.parse(request.url).pathname;
		console.info("Request for "+ pathname +" received. URL is :"+request.url);
		
		request.setEncoding("utf8");
		
		request.addListener("data", function(pDC){
			postData += pDC;
			console.log("Received Post data chunk '"+pDC+"'.");
		});
		request.addListener("end", function(){
			route(handle, pathname, postData, response);
		})
	};
	http.createServer(onRequest).listen(8888);
	console.info("Service has started.");
}

exports.start = start;

