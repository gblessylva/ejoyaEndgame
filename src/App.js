import React from 'react';
import Sidebar from "./components/sidebar/_adminUserActivitySidebar.js";
//import MainContent from "./components/mainContent/_adminUserActivity.js";
import MainContent from "./components/mainContent/_adminUploadedTrack.js";
export default () => (
	<>
		<div className="contentWrapper">
				<Sidebar/>
			<MainContent/>		
		</div>
	</>
);
