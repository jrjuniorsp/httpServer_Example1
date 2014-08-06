var querystring 	= require("querystring");

function start(response, data) {
	var body = "<html><body><h2> Start Page</h2>" +
	"<form action='/upload' method='post'><textarea name='texto'></textarea><input type='submit' value='submit' /></form>" +
	"</body></html>";
	response.writeHead(200,{"Content-Type" : "text/html"});
	response.write(body);
	response.end();
};

function upload(response, data) {
	response.writeHead(200,{"Content-Type" : "text/plain"});
	response.write(data + "\n");
	response.write("Upload page " + querystring.parse(data).nulltexto);
	response.end();
};

exports.start 	= start;
exports.upload 	= upload;