var fs = require("fs");
console.log("start");
   fs.readFile('array.html', function (err, data) {
      if (err) {
         return console.error(err);
      }
      console.log("Asynchronous read: " + data.toString());
   });
console.log("finish");
 
