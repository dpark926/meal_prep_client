import React from 'react'
import AddToPlanner from './AddToPlanner'
import moment from 'moment';

function recipeShow(props) {
  // debugger
  let array = props.recipeData
  let clickedRecipe = props.clickedRecipe
  let newArray = []
  // console.log(clickedRecipe)
  // console.log(array[0])

  for (var i = 0; i < array.length; i++) {
    if (array[i].name === props.clickedRecipe) {
      newArray.push(array[i])
    }
  }

  let ingredientArray = []

  if (newArray.length > 0) {
    ingredientArray.push(newArray[0].ingredients)
    // console.log(newArray[0])
  } else {
    return null
  }

  var ingredientList = ingredientArray[0].map(ingredient =>
    <p>{ingredient.name}</p>
  )
  // debugger
  console.log(ingredientList)

  var list = newArray.map(recipe =>
    (
    <div className='recipe-upper'>
      <div className='recipe-name'>
        <h4>{recipe.name}</h4>
      </div>
      <div className='recipe-show-img'>
        <img src="https://tastespace.files.wordpress.com/2012/08/dsc_1627.jpg" alt="food-pic-sample" height="100%" width="100%"></img>
      </div>

      <div className='recipe-name-ingredient'>
        <div className='recipe-ingredient-box'>
          <h5>INGREDIENTS </h5>
          {ingredientList}
        </div>
        <div className='recipe-instructions'>
          <h4>Calories: {recipe.calories}</h4>
          <h5>INSTRUCTIONS </h5>
          <p>{recipe.instructions}</p>
        </div>
      </div>
    </div>
    )
  )

  return (
    <div className="recipe-show">
      <h1>Recipe Show</h1>
      {list}
      <AddToPlanner
        currentDate={props.currentDate}
        selectedDate={props.selectedDate}
        onSelect={props.onSelect}
      />
    </div>
  )
}

export default recipeShow
