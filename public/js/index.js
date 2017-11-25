var socket = io();//initiates a request from client to server to open web socket

socket.on('connect', function () {
  console.log('connected to server')
});

socket.on('disconnect', function () {
  console.log('disconnected from server')
});

socket.on('newMessage', function (newMessage){
  console.log('new message received', newMessage)
});
