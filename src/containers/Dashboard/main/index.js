import React, {Component}from "react";
import "./dashboard.scss";
import "../../../scss/base/_base.scss";
import {FaArrowRight, FaCaretDown, FaMusic} from "react-icons/fa";
import Chart from "./Chart";
import PieChart from "./Pie";
import NigerianMap from "../../../../public/inspect/nigeria.svg"

class ChartIndex extends Component {

  render() {
    return (
      <>
      <div className="ChartApp">
        <div className="dashboardWrapper">
          <button className="goRight">
            <FaArrowRight />/
          </button>
    <div className="dashHeading">
      <h2>Dashboard</h2>
      <button className="adminButton">
        View Admin Users
      </button>
    </div>
    <div className="dashboard-card-wrapper">
    <div className="dashboard-card">
      <h3>33,082</h3>
      <h4>Total Users</h4>
      <button className="viewUserBtn">View All Users</button>
    </div>
    <div className="dashboard-card">
      <h3>32</h3>
      <h4>Pending Releases</h4>
      <button className="viewUserBtn">View & Approve</button>
    </div>
    <div className="dashboard-card">
      <h3>110,000</h3>
      <h4>Track Uploads</h4>
      <button className="viewUserBtn">View Catalogue</button>
    </div>
    <div className="dashboard-card">
      <h3>$175,230</h3>
      <h4>Revenue</h4>
      <button className="viewUserBtn">View Transactions</button>
    </div>

    </div>
    <div className="progress-container">
      <h2>Progress</h2>
      <div className="progress-wrapper">
        <div className="progress-graph">
          <div>
            <div className="graphLabel">
              <p>Users <FaCaretDown className="downCaret" /></p>
            </div>
            <Chart  /> 
          </div>
          <div className="stream-platforms">
            <div className="platform-container">
              <div className="circle"></div>
                <span className="platform-span-content">Apple Music</span>
            </div>
            <div className="platform-container">
              <div className="circle"></div>
                <span className="platform-span-content">Spotify</span>
            </div>
            <div className="platform-container">
              <div className="circle"></div>
                <span className="platform-span-content">Sound Cloud</span>
            </div>
            <div className="platform-container">
              <div className="circle"></div>
                <span className="platform-span-content">Tidal</span>
            </div>

            </div>
          </div>
 

         
      
        <div className="progress-pie">
        <PieChart />
        <div className="pie-details">
          Distribution Details
        </div>
        </div>
      </div>

    </div>
    <div className="progress-container">
    <h2>Weekly Stats</h2>
      <div className="stats-wrapper">
        <div className="stats-card">
        <center>
          <img src="/inspect/nigeria.svg" className="startsImg" />
          <p>Top performing Region</p>
      </center>
        </div>
        <div className="stats-card">
          <FaMusic className="musicIcon"/>
          <p className="bold-p">Platform Name</p>
          <p>Most Popular</p>
        </div>
        <div className="stats-card">
        <img src="/inspect/Rectangle 7.png" className="statsThumb" />
        <p className="bold-p">Song Title</p>
          <p>Best Performing Song</p>
        </div>
        <div className="stats-card">
          <p className="impression-text">200M</p>
          <p>Total Social Impressions</p>
        </div>
        </div>
    </div>
	</div>
  
</div>        

</>
    );
  }
}

export default ChartIndex;

