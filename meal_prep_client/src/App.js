import React, { Component } from 'react';
import './App.css';
import NavBar from './components/Navbar'
import RecipesContainer from './containers/RecipesContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Meal Prep</h2>
        </div>
        <NavBar />
        <RecipesContainer />
      </div>
    );
  }
}

export default App;
