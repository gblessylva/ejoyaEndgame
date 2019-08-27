import React from "react";
import "../../scss/componentStyles/_adminUploadedTrack.scss"
import "../../scss/base/_base.scss";
import Table from "./_adminUpladedTrackTable.js"

import "../../scss/abstracts/_variables.scss";

export default () => (
	<>
		<div className="mainContent">
				<div className="artistDetails">
          <div className="artistInfo">
            <h1>Uploaded Tracks (34,032)</h1>
          </div>
          <input typme="text" className="searchInput" placeholder="Search Track" />
        </div>
        <div className="description">
          <Table/>
        </div>   
		</div>
	</>
);