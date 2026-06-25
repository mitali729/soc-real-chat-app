import { useEffect, useRef, useState } from "react";
import MessageBubble from "./MessageBubble";
import MessageInput from "./MessageInput";

const initialMessages = [
    {
        id: 1,
        text: "Hey! How are you?",
        isSent: false,
        time: "10:35 AM",
    },
    {
        id: 2,
        text: "I am good. How are you?",
        isSent: true,
        time: "10:37 AM",
    },
    {
        id: 3,
        text: "I am also good. Are we meeting today?",
        isSent: false,
        time: "10:39 AM",
    },
    {
        id: 4,
        text: "Yes, let us meet at 6 PM.",
        isSent: true,
        time: "10:40 AM",
    },
    {
        id: 5,
        text: "Okay, see you soon!",
        isSent: false,
        time: "10:42 AM",
    },
];

function ChatWindow() {
    const [messages, setMessages] = useState(initialMessages);

    const lastMessageRef = useRef(null);

    function getCurrentTime() {
        return new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
        });
    }

    function addNewMessage(messageText) {
        const newMessage = {
            id: Date.now(),
            text: messageText,
            isSent: true,
            time: getCurrentTime(),
        };

        setMessages((previousMessages) => [
            ...previousMessages,
            newMessage,
        ]);
    }

    useEffect(() => {
        lastMessageRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    }, [messages]);

    return (
        <section className="chat-area">

            <header className="chat-header">

                <div className="profile">
                    A
                </div>

                <div className="user-name">
                    <h3>Aarav Sharma</h3>

                    <p>
                        <span className="online-dot"></span>
                        Online
                    </p>
                </div>

                <div className="menu">
                    ⋮
                </div>

            </header>

            <div className="messages">

                {messages.map((message) => (
                    <MessageBubble
                        key={message.id}
                        text={message.text}
                        isSent={message.isSent}
                        time={message.time}
                    />
                ))}

                <div ref={lastMessageRef}></div>

            </div>

            <MessageInput onSendMessage={addNewMessage} />

        </section>
    );
}

export default ChatWindow;