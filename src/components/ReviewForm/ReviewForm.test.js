import React from 'react';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ReviewForm from './ReviewForm';

beforeEach(cleanup);

const onSubmitMock = jest.fn();

const setup = () => {    
    const utils = render(<ReviewForm submitHandler={onSubmitMock} />);
    const nameInput = utils.getByLabelText('name-input');
    const emailInput = utils.getByLabelText('email-input');
    const ratingInput = utils.getByLabelText('rating-input')
    const commentsInput = utils.getByLabelText('comments-input')
    return { nameInput, emailInput, ratingInput, commentsInput, ...utils }
  }

it('inserts text in button', () => {
    const { getByTestId } = render(<ReviewForm />);
    expect(getByTestId('submit-btn')).toHaveTextContent('Submit');
});

it('inputs change value', () => {
    const { nameInput, emailInput, ratingInput, commentsInput } = setup();

    fireEvent.change(nameInput, { target: { value: 'seb' } });
    expect(nameInput.value).toBe('seb');

    fireEvent.change(emailInput, { target: { value: 'seb@email.com' } });
    expect(emailInput.value).toBe('seb@email.com');

    fireEvent.change(ratingInput, { target: { value: '4' } });
    expect(ratingInput.value).toBe('4');

    fireEvent.change(commentsInput, { target: { value: 'comments' } });
    expect(commentsInput.value).toBe('comments');

});

it('submits when all mandatory fields have values', () => {

    //setup
    const { nameInput, emailInput, ratingInput, getByTestId } = setup();

    //If any of the following three lines is removed, the test will fail
    fireEvent.change(nameInput, { target: { value: 'seb' } });
    fireEvent.change(emailInput, { target: { value: 'seb@email.com' } });
    fireEvent.change(ratingInput, { target: { value: '4' } });

    fireEvent.click(getByTestId('submit-btn'));

    expect(onSubmitMock).toBeCalled();
});

it('alert when mandatory fields don\'t have values', async () => {

    //setup
    const { nameInput, emailInput, ratingInput, getByTestId } = setup();

    //Seb: If all three following lines are put back in, the test will fail
    //     At least one of the mandatory values should be missing.
    fireEvent.change(nameInput, { target: { value: 'seb' } });
    fireEvent.change(emailInput, { target: { value: 'seb@email.com' } });
    //fireEvent.change(ratingInput, { target: { value: '4' } });
    
    //Seb: window.alert related code is a workaround I found on the internet
    const jsdomAlert = window.alert;  
    
    window.alert = jest.fn();  // provide an empty implementation for window.alert

    //this should cause the alert to happen
    fireEvent.click(getByTestId('submit-btn'));   
    
    expect(window.alert).toHaveBeenCalled();

    window.alert = jsdomAlert;  // restore the jsdom alert
});