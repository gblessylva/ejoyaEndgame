import React, {Component}from "react";
 import "./index.scss";

import {TextInput, PassInput, MailInput, SelectInput, TextArea, CheckBox } from "./formComponents";

class NotifyUser extends Component {

  render() {
    return (
      <>
  <div className="createUserWrapper">
    <h1>Send Notification to Users</h1>
    <div className="form-wrapper">
      <div className="form-control">
      <TextArea />
      </div>
      <div className="form-control">
       <label className="form-text"> UserName</label>
      <CheckBox />
      </div>
       <div className="form-control">
       
         <label className="form-text">User Email</label>
      <MailInput className="form-item" />
      </div>
      <div className="form-control">
      <label className="form-text"> Password</label>
      <PassInput className="form-item" />
      </div>
      <div className="form-control">
      <label className="form-text"> User Type</label>
      <SelectInput className="form-item" />
      </div>
      <div className="form-control">
      
      <button className="form-btn" > Add User</button>
      </div>
    </div>
    
  </div>
					
  

</>
    );
  }
}

export default NotifyUser;

