import React, { Component } from 'react';
import './styles/App.css';
import NavBar from './components/Navbar'
import LoggedInContainer from './containers/LoggedInContainer'
import LoggedOutContainer from './containers/LoggedOutContainer'
import Login from './components/Login'
import Signup from './components/Signup'
import { Route, Redirect } from 'react-router-dom'

import ReactPerfTool from 'react-perf-tool';
import Perf from 'react-addons-perf';
import 'react-perf-tool/lib/styles.css';

class App extends Component {
  render() {
    if (!localStorage.getItem('token')) {
      return (
        <div className="App">
          <NavBar />
          <Redirect to='/' />
          <LoggedOutContainer />
          <Route path="/login" component={Login}/><br/>
          <Route path="/signup" component={Signup}/>
          {/* <ReactPerfTool perf={Perf} /> */}
        </div>
      )
    } else {
      return (
        <div className="App animated fadeIn">
          <NavBar />
          <div className="below-nav">
            <Redirect to='/' />
            <LoggedInContainer />
          </div>
          {/* <ReactPerfTool perf={Perf} /> */}
        </div>
      );
    }
  }
}

export default App;
