import React from 'react';
import './Operations.css';


function OperationButton(props) {
    return(
        <div className="operation-button">
            <h2>{props.value}</h2>
        </div>
    )
}

export default OperationButton;