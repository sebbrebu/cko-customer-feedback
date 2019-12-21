import React from 'react';
import './Header.css';

const header = (props) => {
    return (
        <header className='Header'>
            <h1>{props.title}</h1>
        </header>
    );
}

export default header;