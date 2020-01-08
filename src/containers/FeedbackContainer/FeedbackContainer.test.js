import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FeedbackContainer from './FeedbackContainer';

afterEach(cleanup);

it('Show just title up to 5 reviews', () => {

    let reviews = [
        { name: 'Seb' }, 
        { name: 'Mr. Grumpy' }, 
        { name: 'Mr. Average' }
    ];

    const { getByText } = render(<FeedbackContainer reviews={reviews} />);

    expect(getByText(/Reviews/i)).toHaveTextContent('Reviews:'); //Reviews (last 5 out of 8):
});

it('Show title and details over 5 reviews', () => {

    let reviews = [
        { name: 'Seb' }, 
        { name: 'Mr. Grumpy' }, 
        { name: 'Mr. Average' },
        { name: 'Impressionable Customer' },
        { name: 'Impossible Customer' },
        { name: 'Yes Man' }
    ];

    const { getByText } = render(<FeedbackContainer reviews={reviews} />);

    expect(getByText(/Reviews/i)).toHaveTextContent('Reviews (last 5 out of ' + reviews.length);
});