import React, { Component } from 'react';

var divStyle = {
    borderStyle: 'solid',
    float: 'left',
    width: '40%',
    padding: '10px',
    height: '300px'
};

class Form extends Component {
        
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
                <form onSubmit={this.handleSubmit}>    

                    <label>Name:</label>
                    <input type="text" name="name" value={this.state.value} onChange={this.handleChange} />                    

                    <label>Email:</label>                    
                    <input type="text" name="email" value={this.state.value} onChange={this.handleChange} />                    

                    <label>Rating:</label>
                    <input type="text" name="rating" value={this.state.value} onChange={this.handleChange} />                    

                    <label>Comments:</label>
                    <input type="text" name="comments" value={this.state.value} onChange={this.handleChange} />                    
                    
                    <input type="submit" value="Submit" />

                </form>
            </div>
        );
      }
}

export default Form;