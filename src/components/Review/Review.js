import React from 'react';
import './Review.css';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';

const review = (props) => {
    return (
        <div data-testid='review-div' className='Review'>
            <p><b>{props.name}</b> - {props.email} - {props.createdDateTime}</p>     
            <Rater total={5} rating={Number(props.rating)} interactive={false} />
            <p><i>{props.comments}</i></p>
        </div>
    );
}

export default review;