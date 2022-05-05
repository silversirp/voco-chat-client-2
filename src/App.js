import logo from './VOCO-Logo.svg';
import './App.css';

import Chat from "./components/Chat/Chat";
import React, {useEffect, useState} from "react";
import {connectToServer, socket} from './socket-service'
import data from './data.json'
import Input from './components/Input/Input';

function App() {
    const [author, setAuthor] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState(data);
    
    useEffect(() => {
        connectToServer()
            .then((message) => {
                console.log(message)
            })
    },[]);
    
    const handleSubmit = () => {
        const chat = {
            message,
            username: author,
        }
        socket.send(JSON.stringify(chat));
        
        socket.onmessage = (websocketData) =>{
            const chatObject = JSON.parse(websocketData.data);
            setMessages([...messages, {
                message: chatObject.message,
                username: chatObject.username,
                date: chatObject.date,
            }]);
        }
        
        setMessage('');
    };
        setMessages([...messages, {
            message,
            username: author,
        }]);
        setMessage('');
    
  return (
    <div className="chat-container">
      <img src={logo} className="App-logo" alt="logo"/>
        <div className="chat-component-container">
            <div className="chat-component">
                <Chat messages={messages}/>
            </div>
            <Input placeholder="Author" onChange={setAuthor} value={author}/>
            <Input placeholder="Message" onChange={setMessage} value={message}/>
            <button type="submit" className="submit-btn" onChange={handleSubmit}>SEND</button>
        </div>


            
    </div>
  );
}

export default App;
