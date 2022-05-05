import logo from './VOCO-Logo.svg';
import './App.css';

import Chat from "./components/Chat/Chat";
import React, {useEffect, useState} from "react";
import {connectToServer, socket} from './socket-service'
import data from './data.json'
import Input from './components/Input/Input';

function App() {
    const [author, setAuthor] = useState('');
    let [message, setMessage] = useState('');
    const [messages, setMessages] = useState(data);
    
    useEffect(() => {
        connectToServer()
            .then((message) => {
                console.log(message)
            });
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

    const messageLength = () => {
        console.log('messageLength() triggered')
      if(message.length >= 100) {
          alert('Ära trüki nii palju! Lubatud 100. Server kärbib teksti, kui pikema saadad.')
      }
    }
    
  return (
    <div className="chat-container">
      <img src={logo} className="App-logo" alt="logo"/>
        <div className="chat-component-container">
            <div className="chat-component">
                <Chat messages={messages}/>
            </div>
            <div className="input-area">
                <Input id="user" placeholder="Autor" onChange={setAuthor} value={author}/>
                <Input id="message" placeholder="Sõnum" onChange={setMessage} value={message} onKeyUp={messageLength()}/>
                <p className="counter">{message.length}/100</p>
            </div>
            <button className="submit-btn" onClick={handleSubmit}>SEND</button>
        </div>
        <div>

        </div>



    </div>


  );
}

export default App;
