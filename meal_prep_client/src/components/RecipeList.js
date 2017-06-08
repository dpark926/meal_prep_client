import React from 'react'

function recipeList(props) {
  let array = props.recipeData
  let searchTerm = props.searchTerm
  let newArray = []

  for (var i = 0; i < array.length; i++) {
    let arrayOfNames = array[i].name.split(" ")
    for (var j = 0; j < arrayOfNames.length; j++) {
      if (arrayOfNames[j].slice(0, searchTerm.length).toLowerCase() === searchTerm.toLowerCase() && !newArray.includes(array[i])) {
        newArray.push(array[i])
      }
    }
  }

  let list = newArray.map((recipe) =>  {
    return(
      <div className="recipe-box">
        <a href="#"><h3 onClick={props.handleClick}>{recipe.name}</h3></a>
        <p>Calories: {recipe.calories}</p>
      </div>
    )
  })
  // debugger

  return (
    <div className="recipe-list">
      <h2>Recipe List</h2>
      {list}
      <a href='#'>
        <div className="recipe-box">
          <h3>+ Add a New Recipe</h3>
          <p>+ Add a New Recipe</p>
        </div>
      </a>
    </div>
  )
}

export default recipeList
