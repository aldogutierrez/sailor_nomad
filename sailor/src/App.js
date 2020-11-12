import React, { Component } from 'react';
import Nabvar from './component/layout/Navbar'
import {BrowserRouter, Route, Switch} from 'react-router-dom'; 
import SignInPage from './component/auth/SignInPage'; 

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container App">
        <Nabvar />
        <Switch>
          <Route path='/signin' component ={SignInPage} />
        </Switch>
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
