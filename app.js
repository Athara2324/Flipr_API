const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient;
// const mongoose = require('mongoose');
//
// mongoose.connect("mongodb+srv://backendconcoxdeveloper:V3jUV7QXqEoAtnhy@cluster0-zhjde.mongodb.net/__CONCOX__?retryWrites=true&w=majority" );
//
// var conn = mongoose.connection;
// conn.on('connected', function() {
//     console.log('database is connected successfully');
// });
// conn.once("open", function () {
//   console.log("Connected successfully");
// });
var obj = {
  deviceId: [],
  location: "",
}

let devId;
const uri = "mongodb+srv://backendconcoxdeveloper:V3jUV7QXqEoAtnhy@cluster0-zhjde.mongodb.net"
MongoClient.connect(uri , function(err,client)
{
  var db = client.db('__CONCOX__');
  var cursor1 = db.collection('devices').find();
  cursor1.sort({createdAt: -1});
  let count = 30;
  cursor1.forEach(function(device_items){

    if(count > 0){
      //console.log(items);
      var cursor2 = db.collection('status').find();
      cursor2.forEach(function(status_items){
          if (device_items._id === status_items._id) {
            console.log(status_items);
          }
      })
      count--;
    }
    //console.log(devId);
  });
//  console.log("devices: ", obj);


})


let currentTime = new Date(2021-12-20)
// const cursor = devices.find()
// console.log(cursor);


app.get("/", function(req,res){
  Device.find({}, function(err,result){
    if(!err){
      res.send(result);
    }
  })
})



app.listen(3000 , function(){
  console.log("Server started at port 3000");

})
