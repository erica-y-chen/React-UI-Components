import React from 'react';
import './NumberPad.css';

import ActionButton from '../ButtonComponents/ActionButton';
import NumberButton from '../ButtonComponents/NumberButton';

const buttonValues = ["Clear", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];


function NumberPad(){
    return (
        <div class="pad">
            {buttonValues.map(buttonsfromMap => (
                <NumberButton value={buttonsfromMap} />
            ))}
        </div>
    )
}


export default NumberPad;

