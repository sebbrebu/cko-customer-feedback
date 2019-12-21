import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './Header';

afterEach(cleanup);

/*Seb: for this component, we'll just test against a snapshot 
       as the component it's not likely to change, and if it does, we'll be warned by this test.
*/
it('renders', () => {
    const { asFragment } = render(<Header title="Customer Feedback" />);
    expect(asFragment()).toMatchSnapshot();
});