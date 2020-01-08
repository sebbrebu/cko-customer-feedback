import React, { Component } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid,
    BarChart, Bar
  } from 'recharts';

const textStyle = {
    textAlign: 'center'
};

class Chart extends Component {
    render() {

        let reversedArray = [...this.props.reviews];
        reversedArray.reverse();      
        
        //Seb: we want the chart to show all 5 rating values, even if there aren't any ratings
        let template =  { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

        //Count occurrence for each rating
        let ratingSummary = this.props.reviews.reduce((p, c) => {
                let rating = c.rating;
                p[rating]++;
                return p;
            }, 
            template
        );
        
        //make the object compatible with the Chart
        let ratingSummaryExtended = Object.keys(ratingSummary).map(k => {
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