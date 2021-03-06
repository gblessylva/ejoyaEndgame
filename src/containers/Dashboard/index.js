import React, { Component, useContext } from 'react';
import { NavLink, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { FiArrowRightCircle, FiTarget } from 'react-icons/fi';
import History from "../../components/mainContent/_transactionHistory";
import Upload from "../../components/mainContent/_adminUploadedTrack.js";
import Activity from "../../components/mainContent/_adminUserActivity.js";
import Royalties from "../../components/mainContent/_paidRoyalties";
import Graphs from "./main/index";
import Catalogue from "./catalogue/index";
import UserActivity from "./users/index";
import Mini from "../Mini_admin";

import Burger from '../../components/Burger';

class DashBoardIndex extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sideBarShown: false,
		};
	}

	toggleSideBar = () => {
		this.setState(({ sideBarShown }) => ({ sideBarShown: !sideBarShown }));
	};

	render() {
		const {
			match: { url },
		} = this.props;
		const { sideBarShown } = this.state;
		return (
			<div className="main_wrapper">
			<main className={(sideBarShown && 'dashboard__mobile hide') || 'dashboard' }>
				<Burger toggleSideBar={this.toggleSideBar} sideBarShown={sideBarShown} />
				<section className={(sideBarShown && 'dashboard__sidebar sidebar__mobile') || 'dashboard__sidebar'}>
					<div className="ejoya-logo-box" />
					<div className="artist-box">
						<img className="artist-image" src="/inspect/Rectangle 5.png" alt="artist-profile-pic" />
						<p>Artist Name</p>
					</div>
					<NavLink to={`${url}/artist/new-release`}>
						<button className="dashboard__release heading-6 font-weight--6">
							<span className="music__icon" />
							New Release
						</button>
					</NavLink>
					<div className="dashboard__function-list">
						<NavLink
							to="/dashboard"
							className="heading-6-1 font-weight--5"
							activeClassName="font-weight--8"
						>
							<span className="home" />
							Home
						</NavLink>
						<NavLink to={`${url}/artist/fan-page`} className="heading-6-1 font-weight--5">
							<span className="fans" />
							Analytics
						</NavLink>
						<NavLink to={`${url}/artist/team-page`} className="heading-6-1 font-weight--5">
							<span className="team" />
							Team
						</NavLink>
						<NavLink to={`${url}/artist/wallet-page`} className="heading-6-1 font-weight--5">
							<span className="wallet" />
							Wallet
						</NavLink>
						<NavLink to={`${url}/artist/settings-page`} className="heading-6-1 font-weight--5">
							<span className="setting" />
							Settings
						</NavLink>
						<NavLink to={`${url}/artist/marketing-page`} className="signout-btn heading-6-1 font-weight--5">
							<FiTarget className="signout" />
							Market
						</NavLink>
						<NavLink to={"../Mini_admin"} className="signout-btn heading-6-1 font-weight--5">
							<FiTarget className="signout" />
							Mini Admin
						</NavLink>
						<div
							className="signout-btn heading-6-1 font-weight--5"
							onClick={() => {
								localStorage.removeItem('AUTH_TOKEN');
							}}
						>
							<FiArrowRightCircle className="signout" />
							Sign Out
						</div>
					</div>
				</section>
				<section
					className={
						(sideBarShown && 'dashboard__content  dashboard__content--mobile') || 'dashboard__content'
					}
					onClick={() => {
						if (this.state.sideBarShown) {
							this.setState({ sideBarShown: false });
						}
					}}
				>
					<div>
						
						<Router>
						<Switch>
						<Route exact path="/admin_transaction_history"  component={History}/>
						
						<Route  path="/admin_users_activity"  component={Activity} />
						<Route  path="/admin_paid_royalties"  component={Royalties} />
						<Route  path="/admin_uploaded_tracks"  component={Upload} />
						<Route  exact path="/catalogue"  component={Catalogue} />
						<Route  exact path="/users"  component={UserActivity} />
						{/* <Route path="/Mini_admin" exact component={Mini} /> */}
						<Route  component={Graphs} />
					</Switch>
					</Router>
						</div>
				</section>
			</main>
			</div>
		);
	}
}

export default DashBoardIndex;
