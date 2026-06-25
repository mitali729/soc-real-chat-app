import Sidebar from "./components/Sidebar";
import ChatWindow from "./components/ChatWindow";
import "./App.css";

function App() {
    return (
        <main className="main-container">
            <Sidebar />
            <ChatWindow />
        </main>
    );
}

export default App;