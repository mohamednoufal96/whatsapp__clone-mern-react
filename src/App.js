import Chats from "./components/Chats";
import Sidebar from "./components/Sidebar";
import "./App.css";

function App() {
    return (
        <div className="app">
            <div className="app__body">
                <Sidebar />
                <Chats />
            </div>
        </div>
    );
}

export default App;
