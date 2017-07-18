var http = require('http');
console.log("hi");
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time is currently: " );
    res.end();
}).listen(8080);
console.log("connetion estabilish");


