const express = require('express');
const app = express();

const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static('public'));

let statusCounts = {
    studying: 0,
    break: 0,
    away: 0
};

io.on('connection', (socket) => {
    console.log('A user connected');


    socket.emit('statusUpdate', statusCounts);


    socket.on('statusChange', (status) => {

        if (status === "studying") statusCounts.studying++;
        if (status === "break") statusCounts.break++;
        if (status === "away") statusCounts.away++;

        io.emit('statusUpdate', statusCounts);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

http.listen(3000, () => {
    console.log('Server running on port 3000');
});