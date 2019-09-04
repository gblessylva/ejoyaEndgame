import React, {Component}from "react";
 import "./index.scss";

import {TextInput, PassInput, UserSelect, MailInput, SelectInput, TextArea, CheckBox } from "./formComponents";

class NotifyUser extends Component {

  render() {
    return (
      <>
  <div className="createUserWrapper">
    <h1>Send Notification to Users</h1>
    <div className="notif-form-wrapper">
    
  <div className="form-content-wrapper">
        <label className="notif-form-text"> From </label>
           <SelectInput className="notif-form-item" />
      <div className="notif-form-control">
        <TextArea className="notif-text" />
      </div>

      

    <div className="notif-form-control">
      
      <button className="form-btn" > Notify</button>
      </div>
  </div>
  <div className="form-content-wrapper controlled-form">
      <div className="notif-form-control">
        <label className="notif-form-text-area"> Quick Search User</label>
        <TextInput className="search-input"  />
      </div>
      <div className="notif-check-control">
          <CheckBox />
      </div>
  </div>
  </div>
	</div>			
  

</>
    );
  }
}

export default NotifyUser;

