const express = require("express");
// server is created
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);


io.on('connection', (socket) => {
    console.log(`${socket.id} user connected`);
    // socket.on("pencil" , function(data){
    //     console.log(data);
    // })
    socket.on("md" , function(point){
        socket.broadcast.emit("onmousedown" , point);
    })
    socket.on("mm" , function(point){
        socket.broadcast.emit("onmousemove" , point);
    })
  });

// server is live at localhost:5000
http.listen(3000, function(){
    console.log("Server started at port 3000 !")
});