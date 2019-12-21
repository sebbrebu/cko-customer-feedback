import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ReviewForm from './ReviewForm';

it('inserts text in button', () => {
    const { getByTestId } = render(<ReviewForm />);
    expect(getByTestId('submit-btn')).toHaveTextContent('Submit');
});