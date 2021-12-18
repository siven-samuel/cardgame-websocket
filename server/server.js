const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io').listen(server);
const localPort = 3300;

// set up public folder
app.use(express.static(__dirname + '/public'));

// send user main entry point
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

// start the application
server.listen(process.env.PORT || localPort, function() {
  console.log('Server running on ' + server.address().port);
});

// remember all messages
let allMessages = [];

// handle connection, receive and send messages
io.on('connection', function(socket) {
  console.log('User connected:', socket.id);
  const color = `hsl(${Math.random() * 360}, 100%, 50%)`;

  if (allMessages.length > 0) {
    socket.emit('allMessages', allMessages);
  }

  socket.on('sendMessage', function(obj) {
    obj.color = color;
    allMessages.push(obj);
    io.emit('receiveMessage', obj);
  });

  socket.on('disconnect', function() {
    console.log('User disconnected:', socket.id)
  });
});