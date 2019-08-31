import React, { Component } from 'react';

import Chart from './chartData';

class LineChart extends Component {
  constructor(){
    super();
    this.state = {
      chartData:{}
    }
  }

  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    

    this.setState({
      chartData:{
        
        labels: ["00:AM", "04:AM", "07:AM", "09:AM", "11:AM", "12:PM"],
        fontSize:[10],
        datasets:[
          {

            label:'Streams',
            fontSize:[10],
            data:[
              1,
             
              1000,
              2000,
              5000,
              8000, 
              10000
            ],
            backgroundColor:[
              '#DDE5E8'
             
            ], 
            
          }
        ]
      }
    });
  }

  render() {
    return (
      <div className="App">
        
        <Chart chartData={this.state.chartData} />
      </div>
    );
  }
}

export default LineChart;