import React from 'react'
import Signup from './Signup'
import Login from './Login'

function NavBar() {
  return (
    <div className='nav'>
      <div className="App-header">
        <div className="logo">
          <h1>MEAL BUDDY</h1>
        </div>
        <div className="logo-space-after"></div>
        <div className='signin'>
          <a href='#'>Log In</a><br/>
          <a href='#'>Sign Up</a>
        </div>
      </div>

      <div className="nav-categories">
        <a href='#'><div className='nav-category'>RECIPES</div></a>
        <a href='#'><div className='nav-category'>MY MEAL PLANNER</div></a>
        <a href='#'><div className='nav-category'>MY RECIPE BOX</div></a>
      </div>
    </div>
  )
}

export default NavBar
