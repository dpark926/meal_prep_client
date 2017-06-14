import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { BrowserRouter, Route } from 'react-router-dom'

import Homepage from './components/Homepage'

ReactDOM.render(
  // <App />,
  <BrowserRouter>
    <App />
    {/* < Route path="/register" render={() => < Homepage recipeData={this.state.recipeData} handleClick={this.handleClick}/>}/><br/> */}
  </BrowserRouter>,
  document.getElementById('root')
);

registerServiceWorker();
