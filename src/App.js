import React, { Component } from 'react';
import './App.css';
import Layout from './hoc/Layout//Layout.js';

class App extends Component {

  state = {
    reviews: [
      {
        name: 'Seb',
        email: 'sebbs89@gmail.com',
        rating: '4',
        comments: 'I was over the moon',
        createdDateTime: '2019-12-20'
      },
      {
        name: 'Mr. Grumpy',
        email: 'grumpyOldMan@gmail.com',
        rating: '1',
        comments: 'Worst experience ever',
        createdDateTime: '2019-12-21'
      }
    ]
  };

  submitReviewHandler = (rev) => {

    // alert(`New customer review submitted: 
    // Name: ` + rev.name + `
    // Email: ` + rev.email + `
    // Rating: ` + rev.rating + `
    // Comments: ` + rev.comments);

    var reviewsArray = [...this.state.reviews];
    reviewsArray.unshift(rev);
    this.setState({ reviews: reviewsArray});
  }

  render() {
    return (
      <Layout reviews={this.state.reviews} submitHandler={this.submitReviewHandler}/>
    );
  }
}

export default App;
