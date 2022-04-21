import logo from './VOCO-Logo.svg';
import './App.css';

import Chat from "./components/Chat/Chat";
import React, {useEffect} from "react";
import {connectToServer} from './socket-service'

function App() {
    useEffect(() => {
        connectToServer()
            .then((message) => {
                console.log(message)
            })
    },[])
  return (
    <div className="chat-container">
      <img src={logo} className="App-logo" alt="logo"/>
        <div className="chat-component-container">
            <div className="chat-component">
                <Chat />
            </div>
            <button type="submit" className="submit-btn">SEND</button>
        </div>


            
    </div>
  );
}

export default App;
