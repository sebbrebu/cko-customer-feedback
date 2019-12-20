import React, { Component } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid,
    BarChart, Bar
  } from 'recharts';

var textStyle = {
    textAlign: 'center'
};

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
                <p style={textStyle}>History</p>
                <LineChart
                    width={450}
                    height={200}
                    data={reversedArray}
                    margin={{
                    top: 30, right: 30, left: 0, bottom: 50,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />                    
                    <YAxis type="number" domain={[1, 5]}/> 
                    <Line type="monotone" dataKey="rating" stroke="rgb(0, 180, 143)" activeDot={{ r: 8 }} />
                </LineChart>
                
                <p style={textStyle}>Summary</p>
                <BarChart width={450} height={200} data={ratingSummaryExtended}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="rating" />
                    <YAxis />                    
                    <Bar dataKey="count" fill="rgb(0, 180, 143)" />
                </BarChart>
            </div>
        );
    }
}

export default Chart;