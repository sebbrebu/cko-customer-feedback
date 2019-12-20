import React from 'react';
import './CustomerFeedback.css';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';

const customerFeedback = (props) => {
    return (
        <div className='CustomerFeedback'>
            <p><b>{props.name}</b> - {props.email} - {props.createdDateTime}</p>     
            <Rater total={5} rating={Number(props.rating)} interactive={false} />
            <p><i>{props.comments}</i></p>
        </div>
    );
}

export default customerFeedback;