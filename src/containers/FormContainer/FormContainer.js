import React, { Component } from 'react';
import ReviewForm from '../../components/ReviewForm/ReviewForm';

class FormContainer extends Component {
    render(){
        return(
            <div className='GraphContainer'>
                <ReviewForm submitHandler={this.props.submitHandler}></ReviewForm>
            </div>
        )
    }
}

export default FormContainer;