import React, { Component } from 'react';

import Chart from './pieData.js';

class PieChart extends Component {
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
        
      
        fontSize:[10],
        datasets:[
          {

            
            fontSize:[10],
            data:[
              52,
              48 
            ],
            backgroundColor:[
              'rgba(255,0,0, 0.4)',
              'rgba(255,255,0, 0.4)'
             
            ], 
            
          }
        ]
      }
    });
  }

  render() {
    return (
      <div className="Pie">
        
        <Chart chartData={this.state.chartData} />
      </div>
    );
  }
}

export default PieChart;