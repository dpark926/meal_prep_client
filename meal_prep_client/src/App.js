import React, { Component } from 'react';
import './App.css';
import NavBar from './components/Navbar'
import RecipesContainer from './containers/RecipesContainer'
import Login from './components/Login'
import Signup from './components/Signup'
import { Switch, Route, Redirect } from 'react-router-dom'

class App extends Component {
  render() {
    if (!localStorage.getItem('token')) {
      return (
        <div className="App">
          <NavBar /><br/>
          < Redirect to='/login' />
          {/* < Route path="/login" component={Login}/><br/> */}
          <Switch>
          < Route exact path="/signup" component={Signup}/>
          < Route path="/" component={Login}/><br/>
          </Switch>
        </div>
      )
      // return (
      //   <div className="App">
      //     <NavBar /><br/>
      //     {/* <Switch>
      //       < Route path="/login" component={Login}/><br/>
      //       < Route path="/register" component={Signup}/><br/>
      //       < Route path="/recipes" component={RecipesContainer} />
      //     </Switch> */}
      //     <RecipesContainer />
      //   </div>
      // )
    } else {
      return (
        <div className="App">
          <NavBar />
          < Redirect to='/' />
          {/* <Switch>
            < Route path="/login" component={Login}/><br/>
            < Route path="/register" component={Signup}/><br/>
            < Route path="/recipes" component={RecipesContainer} />
          </Switch> */}
          <RecipesContainer />
        </div>
      );
    }
  }
}

export default App;
