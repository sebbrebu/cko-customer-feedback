import React, { Component } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
    BarChart, Bar
  } from 'recharts';

class Chart extends Component {
    render() {

        var reversedArray = [...this.props.reviews];
        reversedArray.reverse();      
        
        console.log(reversedArray);

        //Count occurrence for each rating
        var ratingSummary = this.props.reviews.reduce((p, c) => {
            var rating = c.rating;
            if (!p.hasOwnProperty(rating)) {
                p[rating] = 0;
              }
              p[rating]++;
              return p;
            }, {}
        );
        
        //make the object compatible with the Chart
        var ratingSummaryExtended = Object.keys(ratingSummary).map(k => {
            return {rating: k, count: ratingSummary[k]}; });

        return (
            <div>
                <p>History</p>
                <LineChart
                    width={450}
                    height={200}
                    data={reversedArray}
                    margin={{
                    top: 30, right: 30, left: 0, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    
                    <YAxis type="number" domain={[1, 5]}/>
                    
                    
                    <Line type="monotone" dataKey="rating" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
                
                <p>Summary</p>
                <BarChart width={450} height={200} data={ratingSummaryExtended}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="rating" />
                    <YAxis />                    
                    <Bar dataKey="count" fill="#8884d8" />
                </BarChart>
            </div>
        );
    }
}

export default Chart;