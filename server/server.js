const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);// sets up web socket server

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('new user connected');

  socket.emit('newMessage',{
    from: 'Admin',
    text: 'Welcome to the chat'
  })
  socket.broadcast.emit('newMessage',{
    from: 'Admin',
    text: 'New user joined'
  })


  socket.on('createMessage', (message) => {//receive message from client, then relay to to all clients with emi
    console.log('message received from client', message)
    io.emit('newMessage', {
      from: message.from,
      text: message.text,
      createdAt: new Date().getTime()
    })
    // socket.broadcast.emit('newMessage', {
    //   from: message.from,
    //   text: message.text,
    //   createdAt: new Date().getTime()
    // })
  });

  socket.on('disconnect', (socket) =>{
    console.log('user disconnected')
  });
})//registers an event listener

server.listen(port, () => {
  console.log(`Server is up on ${port}`);
})
