var mongodb = require('mongodb');
var fs = require('fs');
var http = require('http');
var express = require('express');
var io = require('socket.io');
 
var app = express();
app.use(express.static('./public'));
 
 
var server = http.createServer(app).listen(8000);
 
io = io.listen(server);
 
 
var MongoClient = mongodb.MongoClient;
 
// Connection URL.
var url = 'url/to/mongodbserver';
 
//Connect to the Server
 
io.sockets.on("connection",function(socket){
    /*Associating the callback function to be executed when client visits the page and
      websocket connection is made */
         
          MongoClient.connect(url, function (err, db) {
                if (err) {
                        console.log('Unable to connect to the mongoDB server. Error:', err);
                } else {
   
                        console.log('Connection established to', url);
 
   
                        var collection = db.collection('accounts');
 
   
                        collection.find({name: 'Ferduun'}).toArray(function (err, result) {
                          if (err) {
                                console.log(err);
                          } else if (result.length) {
                                console.log('Found:', result);
                          } else {
                                console.log('No document(s) found with defined "find" criteria!');
                          }
                          //Close connection
                          db.close();
                        });
     
                        var message_to_client = result;
                        socket.send(JSON.stringify(message_to_client));
                       
      /*sending data to the client , this triggers a message event at the client side */
    console.log('Socket.io Connection with the client established');
    socket.on("message",function(data){
        /*This event is triggered at the server side when client sends the data using socket.send() method */
        data = JSON.parse(data);
 
        console.log(data);
        /*Printing the data */
        var ack_to_client = {
        data:"Server Received the message"
      }
      socket.send(JSON.stringify(ack_to_client));
        /*Sending the Acknowledgement back to the client , this will trigger "message" event on the clients side*/
    });
  }
})
})
