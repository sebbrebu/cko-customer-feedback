import React from 'react';
import './CustomerFeedback.css';

const customerFeedback = (props) => {
    return (
        <div className='CustomerFeedback'>
            <p><b>{props.name}</b> - {props.email} - {props.createdDateTime}</p>     
            <p>Rating: {props.rating}</p>
            <p><i>{props.comments}</i></p>
        </div>
    );
}

export default customerFeedback;