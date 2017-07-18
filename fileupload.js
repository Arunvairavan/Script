var http = require('http');
var fs = require('fs');
http.createServer(function(req, res) {
	fs.readFile('page.html',function (err, data) {
 if (err) {
        throw err;  
    }
    var htmlBody = data;
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});
		res.write(htmlBody);
		res.end();
	});
}).listen(8080);
