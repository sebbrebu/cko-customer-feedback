import React from 'react';
import Aux from '../Aux/Aux';
import TopContainer from '../TopContainer/TopContainer';
import BottomContainer from '../BottomContainer/BottomContainer';
import FeedbackContainer from '../../containers/FeedbackContainer/FeedbackContainer';
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

const layout = (props) => {
    
        return  (
            <Aux>
                <header style={header}>Customer Feedback</header>

                <TopContainer>
                <div style={row}>
                    <FormContainer submitHandler={props.submitHandler}/>
                    <GraphContainer/>
                </div>
                </TopContainer>

                <BottomContainer>
                    <div style={row}>
                        <FeedbackContainer reviews={props.reviews}></FeedbackContainer>
                    </div>
                </BottomContainer>
            </Aux>
        );
    
}

export default layout;