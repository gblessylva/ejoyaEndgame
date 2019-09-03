import React, {Component}from "react";
 import "./index.scss";

import {TextInput, PassInput, MailInput,SelectInput} from "./formComponents";

class CreateUser extends Component {

  render() {
    return (
      <>
  <div className="createUserWrapper">
    <h1>Add New User</h1>
    <div className="form-wrapper">
      <div className="form-control">
      <label className="form-text"> Full Name</label>
      <TextInput className="form-item" />
      </div>
      <div className="form-control">
       <label className="form-text"> UserName</label>
      <TextInput className="form-item" />
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

export default CreateUser;

