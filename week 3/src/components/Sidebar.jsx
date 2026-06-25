const contacts = [
    {
        id: 1,
        initial: "A",
        name: "Aarav",
        message: "Sounds good, see you soon!",
        time: "10:42",
        active: true,
    },
    {
        id: 2,
        initial: "N",
        name: "Neha",
        message: "Can you send the files?",
        time: "9:15",
        active: false,
    },
    {
        id: 3,
        initial: "R",
        name: "Rohan",
        message: "Thank you!",
        time: "Yesterday",
        active: false,
    },
    {
        id: 4,
        initial: "T",
        name: "Team Group",
        message: "Meeting at 5 PM",
        time: "Monday",
        active: false,
    },
];

function Sidebar() {
    return (
        <aside className="sidebar">

            <div className="logo">
                <img
                    src="/chatwave.png"
                    alt="ChatWave Logo"
                    className="logo-image"
                />

                <h2>
                    Chat<span>Wave</span>
                </h2>
            </div>

            <div className="search">
                <input
                    type="text"
                    placeholder="Search contacts"
                />
            </div>

            <div className="contacts">

                {contacts.map((contact) => (
                    <div
                        key={contact.id}
                        className={
                            contact.active
                                ? "contact active"
                                : "contact"
                        }
                    >
                        <div className="profile">
                            {contact.initial}
                        </div>

                        <div className="contact-info">
                            <h3>{contact.name}</h3>
                            <p>{contact.message}</p>
                        </div>

                        <span className="contact-time">
                            {contact.time}
                        </span>
                    </div>
                ))}

            </div>

        </aside>
    );
}

export default Sidebar;