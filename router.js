function route(response, handle, pathname, data) {
	if (typeof handle[pathname] === "function") {
		handle[pathname](response, data);
	} else {
		response.writeHead(404,{"Content-Type": "text/plain"});
		response.write("Not Found");
		response.end();
	}
}

exports.route = route;