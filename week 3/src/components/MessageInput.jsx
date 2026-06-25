import { useState } from "react";

function MessageInput({ onSendMessage }) {
    const [message, setMessage] = useState("");

    function handleSendMessage() {
        const cleanMessage = message.trim();

        if (cleanMessage === "") {
            return;
        }

        onSendMessage(cleanMessage);

        setMessage("");
    }

    function handleKeyDown(event) {
        if (event.key === "Enter") {
            handleSendMessage();
        }
    }

    return (
        <div className="message-box">

            <input
                type="text"
                className="message-input"
                placeholder="Type a message"
                value={message}
                onChange={(event) =>
                    setMessage(event.target.value)
                }
                onKeyDown={handleKeyDown}
            />

            <button
                type="button"
                className="send-button"
                onClick={handleSendMessage}
            >
                Send
            </button>

        </div>
    );
}

export default MessageInput;