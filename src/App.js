// import React from 'react';
// //import Sidebar from "./components/sidebar/_adminUserActivitySidebar.js";
// //import MainContent from "./components/mainContent/_adminUserActivity.js";
// //import MainContent from "./components/mainContent/_adminUploadedTrack.js";
// import Dashboard from "../src/containers/Dashboard";
// export default () => (
// 	<>
// 		<div >
// 				<Dashboard/> 
					
// 		</div>
// 	</>
// );

import React from 'react';
import Home from './containers/Dashboard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default () => (
	<Router>
		<Route exact to="/" component={Home} />
	</Router>
);
