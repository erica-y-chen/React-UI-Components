import React from 'react';
import './Header.css';

import HeaderContent from './HeaderContent.js'
import Image from './ImageThumbnail.js'


function Header() {
    return (
        <div className="Header">
            <Image />
            <HeaderContent />
        </div>
    );
}


export default Header;
