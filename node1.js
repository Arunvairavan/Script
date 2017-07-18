var http = require('http');
var fs = require('fs');
http.createServer(function(req, res) {
	fs.readFile('dummy.json', function(err, data) {
 
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});
		res.write(data);
		res.end();
	});
}).listen(8080);
