import React from 'react';
import './Card.css';

import Header from '../HeaderComponents/HeaderContainer';
import Content from './CardContent';

function Card() {
    return (
        <div class ="card"> 
            <Header />
            <Content />
        </div>
    );
}


export default Card;