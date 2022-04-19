import React from 'react';
import Chatcard from "../Chatcard/Chatcard";
import User from "../User/User";
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
            <div>
                <User />
            </div>
        </div>

    );
}

export default Chat;