import React, {Component}from "react";
import "./index.scss";
import "../../../scss/base/_base.scss";
import {FaArrowRight, FaCaretDown, FaMusic} from "react-icons/fa";
import HistoryTable from "../../../components/mainContent/_adminUpladedTrackTable"
// import PieChart from "./Pie";
// import NigerianMap from "../../../../public/inspect/nigeria.svg"

class Catalogue extends Component {

  render() {
    return (
      <>
  
        <div className="dashboardWrapper">
          <button className="goRight">
            <FaArrowRight />/
          </button>
    <div className="dashHeading">
      <h2>Music Catalogue</h2>
      <button className="adminButton">
        View Pending Releases
      </button>
    </div>
    <div className="dashboard-card-wrapper">
    <div className="dashboard-card">
      <h3>5,000</h3>
      <h4>Tracks Uploaded</h4>
      <button className="viewUserBtn">View Transaction History</button>
    </div>
    <div className="dashboard-card">
      <h3>450</h3>
      <h4>Albums</h4>
      <button className="viewUserBtn">View Earning Users</button>
    </div>
    <div className="dashboard-card">
      <h3>32,000</h3>
      <h4>Total Streams</h4>
      <button className="viewUserBtn">View Royalties</button>
    </div>
    <div className="dashboard-card">
      <h3>15%</h3>
      <h4>Weekly Upload</h4>
      
    </div>

    </div>
    <div className="progress-container">
      <h2>Uploaded Tracks</h2>
      <div className="progress-wrapper">
        <HistoryTable />
    </div>
	</div>
  </div>
  

</>
    );
  }
}

export default Catalogue;

