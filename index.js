const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.use('/static', express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
    socket.on("sent-message", message=>{
        socket.broadcast.emit('chat-message', message);
    });
});

http.listen(3000, () => {
    // console.log('listening on *:3000');
});