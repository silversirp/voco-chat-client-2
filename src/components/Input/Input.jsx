import React from 'react';



function Input({placeholder, onChange, value}) {
    return (
        <div className="input-area">
            
            <input id="message" placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)}/>
        </div>

    );
}

export default Input;