import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

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

    validate(review) {
        //leaving comments nullable on purpose)
        if (review.name === '' || review.email === '' || review.rating === '') {
        
            alert('Please fill all fields.');
            return false;            
        }
        else {
            return true;
        }
    }
    
      handleSubmit(event) {
        
        var newReview = {
            name: this.state.name,
            email: this.state.email,
            rating: this.state.rating,
            comments: this.state.comments,
            createdDateTime: Date(Date.now()).toString('YYYY-MM-DD')
          };         

          if (this.validate(newReview) === true) {
            this.props.submitHandler(newReview);
          }
        event.preventDefault();
      }
    
    render() {
        return (
           
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
                    <Form.Control type="text" placeholder="Enter comments" name="comments" value={this.state.value} onChange={this.handleChange} />  
                    </Form.Group>                  
                    
                    <Button variant="dark" type="submit">
                        Submit
                    </Button>                   

                </Form>
            
        );
      }
}

export default ReviewForm;