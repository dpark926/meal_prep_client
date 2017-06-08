import React, { Component } from 'react';
import './App.css';
import NavBar from './components/Navbar'
import RecipesContainer from './containers/RecipesContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar /><br/>
        <RecipesContainer />
      </div>
    );
  }
}

export default App;
