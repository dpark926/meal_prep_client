import React from 'react'

function login() {
  return (
    <div className="login">
      <h1>Login</h1>
      <form>
        <input placeholder="Email"></input>
        <input placeholder="Password"></input>
        <input type='submit'></input>
      </form>
    </div>
  )
}

export default login
