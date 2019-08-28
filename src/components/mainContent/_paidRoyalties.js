import React from "react";
import "../../scss/componentStyles/_paidRolaties.scss";
import "../../scss/base/_base.scss";
import Table from "./paidRoyaltiesTable.js"

import "../../scss/abstracts/_variables.scss";

export default () => (
	<>
		<div className="mainContent">
				<div className="artistDetails">
          <div className="artistInfo">
            <h1>Paid Royalties</h1>
          </div>
          <input typme="text" className="searchInput" placeholder=" Search Paid Royalties" />
        </div>
        <div className="description">
          <Table/>
        </div>   
		</div>
	</>
);