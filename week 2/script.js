// Selecting input box
let messageInput = document.querySelector(".message-input");

// Selecting send button
let sendButton = document.querySelector(".send-button");

// Selecting messages area
let messages = document.querySelector(".messages");


// Function for sending message
function sendMessage() {

    // Getting text from input
    let text = messageInput.value;

    // Do not send an empty message
    if (text.trim() === "") {
        return;
    }


    // Creating new message bubble
    let messageBox = document.createElement("div");

    // Adding sent message class
    messageBox.classList.add("sent-message");


    // Creating paragraph for message text
    let messageText = document.createElement("p");

    // Putting input text inside paragraph
    messageText.innerText = text;


    // Creating span for time
    let messageTime = document.createElement("span");

    // Getting current time
    let currentTime = new Date().toLocaleTimeString();

    // Putting time inside span
    messageTime.innerText = currentTime;


    // Adding paragraph inside message bubble
    messageBox.appendChild(messageText);

    // Adding time inside message bubble
    messageBox.appendChild(messageTime);

    // Adding new message to messages area
    messages.appendChild(messageBox);


    // Clearing input box
    messageInput.value = "";


    // Scrolling to the latest message
    messageBox.scrollIntoView({
        behavior: "smooth"
    });
}


// Send message when button is clicked
sendButton.addEventListener("click", function () {
    sendMessage();
});


// Send message when Enter key is pressed
messageInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        sendMessage();
    }

});