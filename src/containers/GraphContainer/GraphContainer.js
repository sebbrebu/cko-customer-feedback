import React, { Component } from 'react';

var divStyle = {
    borderStyle: 'solid',
    float: 'left',
    width: '50%',
    padding: '10px',
    height: '300px'
};

class GraphContainer extends Component {
    render(){
        return(<div style={divStyle}>
            This is the graph container
        </div>)
    }
}

export default GraphContainer;