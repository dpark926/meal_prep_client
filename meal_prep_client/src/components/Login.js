import React from 'react'

function login() {
  return (
    <div className="login">
      <h1>Login</h1>
      <form>
        <input placeholder="Email"></input><br/>
        <input placeholder="Password"></input><br/>
        <input type='submit'></input>
      </form>
    </div>
  )
}

export default login
