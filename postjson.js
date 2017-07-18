var express = require('express');
var app = express();
var bodyParser = require('body-parser');


var jsonParser = bodyParser.json({ extended: false })

app.use(express.static('public'));
app.get('/page.html', function (req, res) {
   res.sendFile( __dirname + "/" + "css.html" );
})

app.post('/postfuntion', jsonParser, function (req, res) {
   // Prepare output in JSON format
   response = {
      first_name:req.body.first_name,
      last_name:req.body.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)

})
