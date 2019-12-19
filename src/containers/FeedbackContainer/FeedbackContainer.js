import React, { Component } from 'react';
import CustomerFeedback from '../../components/CustomerFeedback/CustomerFeedback'

var divStyle = {
    borderStyle: 'solid',
    float: 'left',
    width: '95%',
    padding: '10px',
    height: '300px'
};

class FeedbackContainer extends Component {
    render(){
        return(<div style={divStyle}>
            <CustomerFeedback 
                name='Seb' 
                email='sebbs89@gmail.com'
                rating='4'
                comments='Blahblah'
                />
        </div>)
    }
}

export default FeedbackContainer;