import React from 'react';
import Chatcard from "../Chatcard/Chatcard";
import data from "../../data.json";

function Chat() {
    return (
        <div>
            <div>
                {data.map((item) => {
                    return (<Chatcard
                        message={item.message}
                        author={item.username}
                        date={item.date} /> )
                })}
            </div>
            <div className="input-area">
                <input id="user" type="text" placeholder="User"/>
                <textarea name="text" rows="2" id="message" placeholder="Message" maxLength="100"/>
                <p className="counter">x/100</p>
            </div>
            

        </div>

    );
}

export default Chat;