var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));
app.get('/page.html', function (req, res) {
   res.sendFile( __dirname + "/" + "page.html" );
})

app.post('/postfuntion', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
   response = {
      first_name:req.body.first_name,
      last_name:req.body.last_name
   };

   var s1=req.indexOf(firstname);
   var s2=req.indexOf(lastname);
if (s1!=0)
{
console.log("invalid format");
} else {
	var s4 = s3.slice(11);
	console.log(s4);
}
   
   console.log(response);
   res.end(JSON.stringify(response));
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)

})
