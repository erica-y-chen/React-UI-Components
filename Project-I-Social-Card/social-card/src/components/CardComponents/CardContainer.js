import React from 'react';
import './Card.css';

import Header from '../HeaderComponents/HeaderContainer';
import Content from './CardContent';

function Card() {
    return (
        <div class ="card"> 
            <a href = "https://www.reactjs.org">
                <Header />
                <Content />
            </a>
        </div>
    );
}


export default Card;