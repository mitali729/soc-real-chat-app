 function MessageBubble({ text, isSent, time }) {
    return (
        <div
            className={
                isSent
                    ? "sent-message"
                    : "received-message"
            }
        >
            <p>{text}</p>
            <span>{time}</span>
        </div>
    );
}

export default MessageBubble;