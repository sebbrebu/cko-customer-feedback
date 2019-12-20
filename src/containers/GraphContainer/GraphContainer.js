import React, { Component } from 'react';

var divStyle = {    
    border: '1px solid #eee',
    float: 'left',
    width: '50%',
    padding: '10px',
    height: '300px',
    marginLeft: '20px'
};

class GraphContainer extends Component {
    render(){
        return(<div style={divStyle}>
            This is the graph container
        </div>)
    }
}

export default GraphContainer;