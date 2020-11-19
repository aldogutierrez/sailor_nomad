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
	//it will fetch the 
	
	getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(position => {
			const { latitude,longitude} = position.coords; 
			fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=551b95d64a4b49569737e16e9aef77c7`)
			.then(response => response.json())
			.then(console.log); 
			}); 
		}	
	}


	render()
	{
		return (
			<> 
				<Router>
					<div className="App" onLoad = {this.getLocation()}>
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
