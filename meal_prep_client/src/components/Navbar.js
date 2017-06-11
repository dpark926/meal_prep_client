import React from 'react'
import Signup from './Signup'
import Login from './Login'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='nav'>
      <div className="App-header">
        <div className="logo">
          <Link to='/'><h1>MEAL BUDDY</h1></Link>
        </div>
        <div className="logo-space-after"></div>
        <div className="signin-signup">
          <div className='login'>
            <Link to='/login'>LOG IN</Link>
          </div>
          <div className='signup'>
            <Link to='/signup'>SIGN UP</Link>
          </div>
        </div>
      </div>

      <div className="nav-categories">
        <Link to='/recipes'><div className='nav-category'>RECIPES</div></Link>
        <a href='#'><div className='nav-category'>MY RECIPE BOX</div></a>
        <a href='#'><div className='nav-category'>MY MEAL PLANNER</div></a>
      </div>
    </div>
  )
}

export default NavBar
