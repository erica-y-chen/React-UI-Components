import React from 'react';
import './Operations.css';

import OperationButton from './OperationButton';

const OperationValues = ["÷", "x", "-", "+", "="];

function Operations() {
    return(
        <div className="operations">
            {OperationValues.map(valuesfromMap => (
                <OperationButton value ={valuesfromMap} />
            ))}
        </div>
    )
}

export default Operations;


