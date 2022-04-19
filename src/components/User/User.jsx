import React from 'react';

function User({Input_username}) {
    return (
        <div className="user">
            <input type="text" placeholder={Input_username}/>
        </div>
    );
}

export default User;