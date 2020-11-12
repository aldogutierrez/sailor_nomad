import React, { Component } from 'react';
import Nabvar from './component/layout/Navbar'
import {BrowserRouter, Router, Switch} from 'react-router-dom'; 
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container App">
        <Nabvar />
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
