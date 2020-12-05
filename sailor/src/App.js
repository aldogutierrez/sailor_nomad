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
import HistoricalSites from './component/layout/HistoricalSites'; 
import Cuisines from './component/layout/Cuisines'; 
import './App.css'
import Hikes from "./component/layout/Hikes";
import Hotels from "./component/layout/Hotels";

class App extends Component
{
	//it will fetch the 
	
	getLocation() {
	if (navigator.geolocation && this.map_url == null) {
		console.log("this map url = " + this.map_url)
		navigator.geolocation.getCurrentPosition(position => {
			const { latitude,longitude} = position.coords; 
				fetch("http://localhost:3001/googleMe?lat="+latitude+"&long="+longitude)
				.then((response) => {
					return response.text();
				 })
				 .then((responseJson) => {
					console.log(responseJson);
					this.map_url=responseJson
				 })
				 .catch((error) => {
					console.error(error);
				 });
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
							<Route path='/historical' component={HistoricalSites} />
							<Route path='/cuisines' component={Cuisines} />
							<Route path='/hikes' component={Hikes} />
							<Route path='/hotels' component={Hotels} />
						</Switch>
					</div>
				</Router>
			</>
		);
	}
}

export default App;
