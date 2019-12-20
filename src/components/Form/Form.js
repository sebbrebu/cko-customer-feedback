import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';

var divStyle = {
    float: 'left',
    width: '40%',
    padding: '10px',
    border: '1px solid #eee'
};

class ReviewForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            rating: '',
            comments: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {        
        this.setState({ [event.target.name]: event.target.value });
      }

    //   handleRate(event){     
    //     console.log(event.rating);
    //     //this.setState({ rating: event.rating }); 
    //   }
    
      handleSubmit(event) {
        // alert(`New comment submitted: 
        // Name: ` + this.state.name + `
        // Email: ` + this.state.email + `
        // Rating: ` + this.state.rating + `
        // Comment: ` + this.state.comments);
        
        var newReview = {
            name: this.state.name,
            email: this.state.email,
            rating: this.state.rating,
            comments: this.state.comments,
            createdDateTime: Date(Date.now()).toString('YYYY-MM-DD')
          };

          //add validation

        this.props.submitHandler(newReview);
        event.preventDefault();
      }

    render() {
        return (
            <div style={divStyle}>
                <Form onSubmit={this.handleSubmit}>    

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" name="name" onChange={this.handleChange} />  
                    </Form.Group>                  

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email:</Form.Label>                    
                        <Form.Control type="email" placeholder="Enter email" name="email" onChange={this.handleChange} />    
                    </Form.Group>                

                    

                    <Form.Group>
                    <Form.Label>Rating:</Form.Label>
                    {/* <Rater total={5} rating={2} name="rating" onRate={this.handleRate}/> */}
                    <Form.Control type="number" min = "1" max="5" placeholder="Enter rating" name="rating" value={this.state.value} onChange={this.handleChange} />
                    </Form.Group>  

                    <Form.Group>
                    <Form.Label>Comments:</Form.Label>
                    <Form.Control type="text" placeholder="Enter comments"  name="comments" value={this.state.value} onChange={this.handleChange} />  
                    </Form.Group>                  
                    
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>                   

                </Form>
            </div>
        );
      }
}

export default ReviewForm;