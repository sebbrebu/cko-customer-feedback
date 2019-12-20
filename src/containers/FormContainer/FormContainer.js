import React, { Component } from 'react';
import ReviewForm from '../../components/Form/Form';

class FormContainer extends Component {
    render(){
        return(<ReviewForm submitHandler={this.props.submitHandler}></ReviewForm>)
    }
}

export default FormContainer;