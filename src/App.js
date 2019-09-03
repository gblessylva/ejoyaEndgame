
import React from 'react';
import Home from './containers/Dashboard';
import Mini from "./containers/Mini_admin";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default () => (
	<Router>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/mini_admin" component={Mini}/>
		</Switch>
	</Router>
);
