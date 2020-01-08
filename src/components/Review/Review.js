import React from 'react';
import './Review.css';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';

const review = (props) => {
    return (
        <div data-testid='review-div' className='Review'>
            <p><strong>{props.name}</strong> - {props.email} - {props.createdDateTime}</p>     
            <Rater total={5} rating={Number(props.rating)} interactive={false} />
            <p><em>{props.comments}</em></p>
        </div>
    );
}

export default review;