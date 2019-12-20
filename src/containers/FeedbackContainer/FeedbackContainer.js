import React, { Component } from 'react';
import CustomerFeedback from '../../components/CustomerFeedback/CustomerFeedback'

var divStyle = {    
    float: 'left',
    width: '95%',
    padding: '10px',
    marginTop: '100px'   
};

class FeedbackContainer extends Component {
    render(){
        var details = (this.props.reviews.length > 5) ? ' (last 5 out of ' + this.props.reviews.length + ')': '';
        return(
        <div style={divStyle}>

            <h1>Customer Reviews{details}:</h1>

            {
                this.props.reviews.map((rev, index) => { 
                    if (index < 5)   
                    {
                        return <CustomerFeedback 
                                key={rev.name}
                                name={rev.name}
                                email={rev.email}
                                rating={rev.rating}
                                comments={rev.comments}
                                createdDateTime={rev.createdDateTime}
                                />
                    } 
                })
            }

        </div>)
    }
}

export default FeedbackContainer;