import React from 'react'
import { Link } from 'react-router-dom'
import RecipeSearch from './RecipeSearch'
import RecipeNew from './RecipeNew'
import RecipeShow from './RecipeShow'

function recipeList(props) {
  let array = props.recipeData
  let searchTerm = props.searchTerm
  let newArray = []
  console.log(array)

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
        <Link to={`/recipes/${recipe.id}`}><h4 onClick={props.handleClick}>{recipe.name}</h4></Link>
        <p>Calories: {recipe.calories}</p>
      </div>
    )
  })
  // debugger

  return (
    <div className="recipe-list">
      <RecipeSearch onChange={props.onChange}/><br/>
      <h2>Recipe List</h2>
      {list}
      <Link to='/newrecipe'>
        <div className="recipe-box">
          <h4>+ Add a New Recipe</h4>
          <p>+ Add a New Recipe</p>
        </div>
      </Link>
      <RecipeShow
        recipeData={props.recipeData}
        clickedRecipe={props.clickedRecipe}
        currentDate={props.currentDate}
        selectedDate={props.selectedDate}
        onSelect={props.onSelect}
        selectedMealTime={props.selectedMealTime}
        handleMealTime={props.handleMealTime}
      /><br/>
      <RecipeNew />
    </div>
  )
}

export default recipeList
