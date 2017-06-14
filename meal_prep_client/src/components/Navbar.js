import React from 'react'
import Signup from './Signup'
import Login from './Login'
import { Link } from 'react-router-dom'

function clearLocalStorage() {
  localStorage.clear()
}

function NavBar() {
  if (!localStorage.getItem('token')) {
    return (
      <div className='nav'>
        <div className="App-header">
          <div className="logo">
            <Link to='/'><h4>MEAL BUDDY</h4></Link>
          </div>
          <div className="logo-space-after"></div>
          <div className="signin-signup">
            <div className='login-link'>
              <Link to='/login'>LOG IN</Link>
            </div>
            <div className='signup-link'>
              <Link to='/signup'>SIGN UP</Link>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className='nav'>
        <div className="App-header">
          <div className="logo">
            <Link to='/'><h4>MEAL BUDDY</h4></Link>
          </div>
          <div className="logo-space-after"></div>
          <div className="signin-signup">
            <div className='welcome'>WELCOME, {localStorage.user}</div>
            <div className='signup-link'>
              <Link to='/logout' onClick={clearLocalStorage}>LOG OUT</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NavBar
