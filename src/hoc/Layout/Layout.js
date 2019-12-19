import React, { Component } from 'react';
import Aux from '../Aux/Aux';
import TopContainer from '../TopContainer/TopContainer';
import BottomContainer from '../BottomContainer/BottomContainer';
import ReviewsContainer from '../../containers/FeedbackContainer/FeedbackContainer';
import FormContainer from '../../containers/FormContainer/FormContainer';
import GraphContainer from '../../containers/GraphContainer/GraphContainer';


var row = {
    display: 'table',
    width: '100%'
};

var header = {
    backgroundColor: '#666',
    padding: '30px',
    textAlign: 'center',
    fontSize: '35px',
    color: 'white'
  }

class Layout extends Component {
    render() {
        return  (
            <Aux>
                <header style={header}>Customer Feedback</header>

                <TopContainer>
                <div style={row}>
                    <FormContainer>

                    </FormContainer>
                    <GraphContainer></GraphContainer>
                </div>
                </TopContainer>

                <BottomContainer>
                    <div style={row}>
                        <ReviewsContainer></ReviewsContainer>
                    </div>
                </BottomContainer>
            </Aux>
        );
    }
}

export default Layout;