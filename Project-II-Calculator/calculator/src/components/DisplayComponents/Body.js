import React from 'react';
import './Body.css';

import NumberPad from './NumberPad';
import Operations from './Operations';

function Body () {
    return (
        <div className="body">
            <NumberPad />
            <Operations />
        </div>
    )
}

export default Body;