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
      <div className='recipe-show-img'>
        <h1>{recipe.name}</h1>
        <img src="https://images.food52.com/XIZIrmKE5lAjl0ENZMIotx8MXaI=/753x502/21be0f49-43e8-4576-b205-41ccc0b1b413--2017-0427_udis-sponsored-post-2_james-ransom-262.jpg" alt="food-pic-sample" height="100%" width="100%"></img>
      </div>

      <div className='recipe-name-ingredient'>
        <div className='recipe-name-img'>
          <h4>Calories: {recipe.calories}</h4>
        </div>
        <div className='recipe-ingredient-box'>
          <h5>INGREDIENTS </h5>
          {ingredientList}
        </div>
        <div className='recipe-instructions'>
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
