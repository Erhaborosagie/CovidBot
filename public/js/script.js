const socket = io('http://localhost:3000/');

const send_box = document.getElementById("send-box");
let input_box = document.getElementById("message");
let message_box = document.getElementById("message-box");

socket.on('chat-message', data =>{
    appendSentMessage(data, "received")
});

send_box.addEventListener("submit", e => {
    e.preventDefault();
    let message = input_box.value;
    socket.emit("sent-message", message);
    input_box.value = '';
    appendSentMessage(message, "sent")
});

function appendSentMessage(message, transit) {
    const messageElement = document.createElement('div');
    const innerMessage = document.createElement('div');
    const iconDiv = document.createElement('div');
    innerMessage.classList.add("message");
    iconDiv.classList.add("icon");
    messageElement.classList.add(transit);
    innerMessage.innerText = message;

    if (transit === "sent"){
        iconDiv.innerHTML = `<i class="far fa-user"></i>`;
        messageElement.append(innerMessage);
        messageElement.append(iconDiv);
    }else {
        iconDiv.innerHTML = `<img src="static/images/covidbot.png" alt="covidbot" style="max-width: 30px">`;
        messageElement.append(iconDiv);
        messageElement.append(innerMessage);
    }

    message_box.append(messageElement);
}