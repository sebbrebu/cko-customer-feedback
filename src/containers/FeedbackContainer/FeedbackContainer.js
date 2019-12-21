import React, { Component } from 'react';
import CustomerFeedback from '../../components/CustomerFeedback/CustomerFeedback'

//using inline style for this component, for demo puprposes
var divStyle = {    
    float: 'left',
    width: '95%',
    padding: '10px',
    marginTop: '50px'   
};

var titleFont = {
    fontFamily: "Courier"
}

class FeedbackContainer extends Component {
    render(){
        var details = (this.props.reviews.length > 5) ? ' (last 5 out of ' + this.props.reviews.length + ')': '';
        return(
        <div style={divStyle}>

            <h3 style={titleFont}>Customer Reviews{details}:</h3>

            {
                this.props.reviews.map((rev, index) => { 
                    //show only the last 5 reviews. When adding new reviews, they are added at the beginning of the array.
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
                    else return null;
                })
            }

        </div>)
    }
}

export default FeedbackContainer;