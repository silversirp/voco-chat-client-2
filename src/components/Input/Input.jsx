import React from 'react';



function Input({placeholder}) {
    return (
        <div className="input-area">
            <input id="user" type="text" placeholder="User"/>
            <input id="message" placeholder={placeholder}/>
            <p className="counter">
                x/100
            </p>
            <button type="submit">SEND</button>
        </div>

    );
}

export default Input;