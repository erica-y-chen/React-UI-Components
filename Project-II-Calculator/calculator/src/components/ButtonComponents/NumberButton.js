import React from 'react';
import './Button.css';


function NumberButton(props) {
    return (
        <div class ="Button">
             <h2>{props.value}</h2>
        </div>
    )
}

export default NumberButton;