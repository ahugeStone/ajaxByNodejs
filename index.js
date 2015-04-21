var service = require("./service");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {};
handle["/"] = requestHandlers.start;

for(var el in requestHandlers){
	console.info(el);
	handle["/"+el] = requestHandlers[el];
}

service.start(router.route, handle);