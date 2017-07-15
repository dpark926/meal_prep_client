import React from 'react'

function recipeNew() {
  return (
    <div className="recipe-new">
      <h1>Add a New Recipe</h1>
      <form>
        <input className="login-box" placeholder="RECIPE NAME"></input><br/><br/>
        <input className="login-box" placeholder="CALORIES"></input><br/><br/>
        <input className="login-box" placeholder="INGREDIENTS"></input><br/><br/>
        <textarea className="login-box" placeholder="INSTRUCTIONS"></textarea><br/><br/>
        <input className="submit-box" type='submit' value="SUBMIT"></input>
      </form>
    </div>
  )
}

export default recipeNew
