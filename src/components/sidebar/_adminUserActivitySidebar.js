import React from "react";
import "../../scss/componentStyles/_adminUserActivitySidebar.scss"
import "../../scss/base/_base.scss"
import Logo from "../ejoya-dark-logo.png";
import Profile from "../images/profile.png"
export default () => (
	<>
		<div className="mainSideBar">
				<div className="sidebarWrapper">
          <div className="mainLogo">
          <img src={Logo} alt="main logo"/>
          </div>
          <div className="artistProfileImage">
            <img src={Profile} alt="Artist Profile"/>
          </div>
          <div className="artistName">
            <h2>Admin User</h2>
          </div>
          
        </div>
		</div>
	</>
);