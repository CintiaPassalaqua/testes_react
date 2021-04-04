import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Inicial from './pages/Inicial';

export default function Routes() {
	return (
	  <BrowserRouter>
		<Switch>
			<Route path='/sokoban' exact component={Home} />
			<Route path='/:id' exact component={Inicial} />
		</Switch>
	  </BrowserRouter>
	);
}