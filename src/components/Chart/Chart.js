import React, { Component } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';

class Chart extends Component {
    render() {

        var reversedArray = [...this.props.reviews];
        reversedArray.reverse();

        return (
            <div>
                <LineChart
                    width={450}
                    height={300}
                    data={reversedArray}
                    margin={{
                    top: 30, right: 30, left: 0, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    
                    <YAxis type="number" domain={[1, 5]}/>
                    
                    
                    <Line type="monotone" dataKey="rating" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </div>
        );
    }
}

export default Chart;