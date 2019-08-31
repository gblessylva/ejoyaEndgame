import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

class Chart extends Component{
 
  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData
    }
  }

  

  render(){
    return (
      <div className="chart">
        

        <Line
          data={this.state.chartData}
            
            height={150}

          options={
            
            { 
              legend: {
              labels: {
                  // This more specific font property overrides the global property
                  fontSize:10
              }
          },
              maintainAspectRatio: false,
              scales: {
                  xAxes: [{
                      gridLines: {
                          display:false
                      }
                  }],
                  
                  yAxes: [{
                    display:false,
                      gridLines: {
                          display:false
                      }   
                  }]
              }
          
          }}
        />

        
      </div>
    )
  }
}

export default Chart;