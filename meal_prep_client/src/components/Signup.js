import React from 'react'

function signup() {
  return (
    <div className="signup">
      <h1>Sign Up</h1>
      <form>
        <input placeholder="Name"></input>
        <input placeholder="Email"></input>
        <input placeholder="Password"></input>
        <input type='submit'></input>
      </form>
    </div>
  )
}

export default signup
