function sendMessage() {
    let messageInput = document.getElementById("message-input");
    let chatBox = document.getElementById("chat-box");

    if (messageInput.value.trim() !== "") {
        let messageElement = document.createElement("div");
        messageElement.classList.add("message");
        messageElement.innerText = messageInput.value;

        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
        messageInput.value = "";
    }
}