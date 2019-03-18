import React from 'react';
import './Card.css';

import Banner from './CardBanner'
import Article from './CardArticle'

function CardContent() {
    return(
        <div class="content">
            <Banner />
            <Article />
        </div>
    )
}

export default CardContent;