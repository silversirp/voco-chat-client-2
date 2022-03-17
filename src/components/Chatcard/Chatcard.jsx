import React from 'react';

function Chatcard({message, username, date}) {
    return (
        <div className="chat-card">
            <p>
                {message}
            </p>
            <p>
                {username}
            </p>
            <p>
                {date}
            </p>
        </div>
    );
}

export default Chatcard;