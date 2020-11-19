// React imports
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// File imports
import Navbar from "./component/layout/Navbar";
import Home from './component/pages/Home'
import Services from "./component/pages/Services";
import SignUp from "./component/pages/SignUp";
import About from "./component/pages/About";
import Login from "./component/pages/Login";
import './App.css'

class App extends Component
{
	render()
	{
		return (
			<> 
				<Router>
					<div className="container App">
						<Navbar />
						<Switch>
							<Route path='/' exact component={Home}/>
							<Route path='/services' component={Services}/>
							<Route path='/sign-up' component={SignUp}/>
							<Route path='/about' component={About} />
							<Route path='/login' component={Login} />
						</Switch>
					</div>
				</Router>
			</>
		);
	}
}

export default App;
