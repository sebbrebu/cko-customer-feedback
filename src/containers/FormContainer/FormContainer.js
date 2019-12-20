import React, { Component } from 'react';
import ReviewForm from '../../components/Form/Form';

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