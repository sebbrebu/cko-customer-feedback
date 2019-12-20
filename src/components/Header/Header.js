import React from 'react';
import './Header.css';

const header = (props) => {
    return <header className='Header'>{props.title}</header>
}

export default header;