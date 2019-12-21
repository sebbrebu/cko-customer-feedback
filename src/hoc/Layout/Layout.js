import React from 'react';
import Header from '../../components/Header/Header';
import FeedbackContainer from '../../containers/FeedbackContainer/FeedbackContainer';
import FormContainer from '../../containers/FormContainer/FormContainer';
import GraphContainer from '../../containers/GraphContainer/GraphContainer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

const layout = (props) => {
    
        return  ( 
            <div>
                <Header title='Customer Feedback' />

                <Container>

                    <Row>
                        <Col>
                            <FormContainer submitHandler={props.submitHandler}/>
                        </Col>
                        <Col>
                            <GraphContainer reviews={props.reviews}/>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <FeedbackContainer reviews={props.reviews}></FeedbackContainer>
                        </Col>
                    </Row>

                </Container>

            </div>
        );
    
}

export default layout;