var http 	= require("http");
var url 	= require("url"); 

function start(route, handle) {
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		var data = null;
		
		request.setEncoding("utf8");
		
		request.addListener("data", function(postData) {
			data += postData;
		});
		
		request.addListener("end", function() {
			console.log("end");
			route(response, handle, pathname, data);
		});
		
		
	};
	http.createServer(onRequest).listen(8888);
};

exports.start = start;

console.log("Server started at port 8888");