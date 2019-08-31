import React, {Component} from 'react';
import {Pie} from 'react-chartjs-2';

class PieData extends Component{
 
  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData
    }
  }

  

  render(){
    return (
      <div className="chart">
        

        <Pie
          data={this.state.chartData}
            
            height={200}

          options={
            
            { 
              legend: {
              labels: {
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
                  }],
                  xAxes: [{
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

export default PieData;