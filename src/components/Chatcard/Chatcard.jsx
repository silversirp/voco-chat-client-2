import React from 'react';

function Chatcard({message, author, date}) {
    return (
            <div className="chat-card">
                <p>
                    {message}
                </p>
                <div className="user-name">
                    <p>{author} </p>
                    <p>
                        <svg viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="50"/>
                        </svg>
                    </p>
                    <p> {date}</p>
                </div>

            </div>
        
    );
}

export default Chatcard;