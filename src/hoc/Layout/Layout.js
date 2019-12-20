import React from 'react';
import Aux from '../Aux/Aux';
import Header from '../../components/Header/Header';
import TopContainer from '../TopContainer/TopContainer';
import BottomContainer from '../BottomContainer/BottomContainer';
import FeedbackContainer from '../../containers/FeedbackContainer/FeedbackContainer';
import FormContainer from '../../containers/FormContainer/FormContainer';
import GraphContainer from '../../containers/GraphContainer/GraphContainer';


var row = {
    display: 'table',
    width: '100%'
};

const layout = (props) => {
    
        return  ( 
            <Aux>
                <Header title='Customer Feedback' />

                <TopContainer>
                <div style={row}>
                    <FormContainer submitHandler={props.submitHandler}/>
                    <GraphContainer reviews={props.reviews}/>
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