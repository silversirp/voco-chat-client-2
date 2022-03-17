import React from 'react';

function Chatcard({message, author, date}) {
    return (
        <div className="chat-card">
            <p>
                {message}
            </p>
            <div className="user-name">
                <p>
                    {author}
                </p>
                <p>
                    {date}
                </p>
            </div>

        </div>
    );
}

export default Chatcard;