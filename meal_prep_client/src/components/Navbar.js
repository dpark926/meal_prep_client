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
          <p>Log In</p>
          <p>Sign Up</p>
        </div>
      </div>
      <div className="nav-categories">
        <p>Categories</p>
        <p>Meal Planner</p>
        <p>My Recipe Box</p>
      </div>
    </div>
  )
}

export default NavBar
