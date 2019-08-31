import React, {Component}from "react";
import "./index.scss";
import "../../../scss/base/_base.scss";
import {FaArrowRight} from "react-icons/fa";
import ActivityTable from "../../../components/mainContent/_adminUserActivityTable"


class Users extends Component {

  render() {
    return (
      <>
  
        <div className="dashboardWrapper">
          <button className="goRight">
            <FaArrowRight />
          </button>
    <div className="dashHeading">
      <h2>Users</h2>
      <button className="adminButton">
        View All Users
      </button>
    </div>
    <div className="dashboard-card-wrapper">
    <div className="dashboard-card">
      <h3>35,000</h3>
      <h4>Total Users</h4>
      <button className="viewUserBtn">View ALl Users</button>
    </div>
    <div className="dashboard-card">
      <h3>22,900</h3>
      <h4>Earning Users</h4>
      <button className="viewUserBtn">View Earning Users</button>
    </div>
    <div className="dashboard-card">
      <h3>5000</h3>
      <h4>Daily Active Users</h4>
      <button className="viewUserBtn">View Active Users</button>
    </div>
    <div className="dashboard-card">
      <h3>15%</h3>
      <h4>Weekly Users</h4>
      
    </div>

    </div>
    <div className="progress-container">
    <div className="dashHeading">
      <h2>Users</h2>
      <button className="adminButton">
        View All Users Activities
      </button>
    </div>
      <div className="progress-wrapper">

        <ActivityTable />
    </div>
	</div>
  </div>
  

</>
    );
  }
}

export default Users;

