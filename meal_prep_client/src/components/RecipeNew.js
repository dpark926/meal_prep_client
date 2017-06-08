import React from 'react'

function recipeNew() {
  return (
    <div className="recipe-new">
      <h1>Add a New Recipe</h1>
      <form>
        <input placeholder="Name"></input>
        <input placeholder="Instructions"></input>
        <input placeholder="Calories"></input>
        <input type='submit'></input>
      </form>
    </div>
  )
}

export default recipeNew
