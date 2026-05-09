const socket = io();

console.log("Connected to server");

document.getElementById('studyBtn').addEventListener('click', () => {
    socket.emit('statusChange', 'studying');
});

document.getElementById('breakBtn').addEventListener('click', () => {
    socket.emit('statusChange', 'break');
});

document.getElementById('awayBtn').addEventListener('click', () => {
    socket.emit('statusChange', 'away');
});

socket.on('statusUpdate', (data) => {
    document.getElementById('studyCount').innerText = data.studying;
    document.getElementById('breakCount').innerText = data.break;
    document.getElementById('awayCount').innerText = data.away;
});