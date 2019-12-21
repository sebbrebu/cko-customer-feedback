import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Review from './Review';

afterEach(cleanup);

it('inserts text in button', () => {
    const { getByTestId } = render(<Review />);
    expect(getByTestId('review-div')).toHaveClass('Review');
});