import React, { Component } from 'react';
import Form from '../../components/Form/Form';

var divStyle = {
    borderStyle: 'solid',
    float: 'left',
    width: '40%',
    padding: '10px',
    height: '300px'
};

class FormContainer extends Component {
    render(){
        return(<Form submitHandler={this.props.submitHandler}></Form>)
    }
}

export default FormContainer;