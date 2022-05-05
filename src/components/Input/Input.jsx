import React from 'react';



function Input({id, placeholder, onChange, value}) {
    return (
        // <div>
            <input id={id} placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)}/>
        // </div>

    );
}

export default Input;