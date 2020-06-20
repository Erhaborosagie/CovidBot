const socket = io('http://localhost:3000/');

const send_box = document.getElementById("send-box");
let input_box = document.getElementById("message");

socket.on('chat-message', data =>{
    console.log(data);
});

send_box.addEventListener("submit", e => {
    e.preventDefault();
    let message = input_box.value;
    socket.emit("sent-message", message);
    input_box.value = '';
});