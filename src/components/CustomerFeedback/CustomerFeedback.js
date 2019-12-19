import React from 'react';
import './CustomerFeedback.css';

const customerFeedback = (props) => {
    return (
        <div className='CustomerFeedback'>
            <p>Name: {props.name}</p>
            <p>Email: {props.email}</p>
            <p>Rating: {props.rating}</p>
            <p>Comments: {props.comments}</p>
        </div>
    );
}

export default customerFeedback;