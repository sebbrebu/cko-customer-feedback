import React, { Component } from 'react';
import './GraphContainer.css';
import Chart from '../../components/Chart/Chart';

class GraphContainer extends Component {
    render(){
        return(<div className='GraphContainer'>
            <Chart reviews={this.props.reviews}></Chart>
        </div>)
    }
}

export default GraphContainer;