import React from "react";
import "../../scss/componentStyles/_uploadHistory.scss"
import "../../scss/base/_base.scss";
import Table from "./_transactionHistoryTable";

import "../../scss/abstracts/_variables.scss";

export default () => (
	<>
		<div className="mainContent">
				<div className="artistDetails">
          <div className="artistInfo">
            <h1>Transaction History</h1>
          </div>
          <input typme="text" className="searchInput" placeholder="Search History" />
        </div>
        <div className="description">
          <Table/>
        </div>   
		</div>
	</>
);