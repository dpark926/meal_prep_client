import React, { Component } from 'react';
import './App.css';

import RecipesContainer from './containers/RecipesContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Meal Prep</h2>
        </div>

        <RecipesContainer />
      </div>
    );
  }
}

export default App;
