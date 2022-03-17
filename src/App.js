import logo from './VOCO-Logo.svg';
import './App.css';

import Input from "./components/Input/Input";
import Chat from "./components/Chat/Chat";

function App() {
  return (
    <div className="chat-container">
      <img src={logo} className="App-logo" alt="logo"/>
        <div className="chat-component">
            <Chat />
        </div>

    </div>
  );
}

export default App;
