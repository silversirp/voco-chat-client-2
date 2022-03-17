import React from 'react';
import Chatcard from "../Chatcard/Chatcard";
import data from "../../data.json";

function Chat() {
    return (
        <div>
            {data.map((item) => {
            return (<Chatcard
            message={item.message}
            username={item.username}
            date={item.date} /> )
            })}
        </div>
    );
}

export default Chat;