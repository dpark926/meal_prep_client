import React from 'react'

function recipeShow(props) {
  let array = props.recipeData
  let clickedRecipe = props.clickedRecipe
  let newArray = []
  // console.log(clickedRecipe)
  // console.log(array[0])

  for (var i = 0; i < array.length; i++) {
    if (array[i].name === clickedRecipe) {
      newArray.push(array[i])
    }
  }
  console.log(clickedRecipe)
  var list = newArray.map(recipe =>
    (
      <div className='recipe-name-img'>
        <h1>{recipe.name}</h1>
        <h4>Calories: {recipe.calories}</h4>
      </div>
    )
  )

  return (
    <div className="recipe-show">
      <h1>Recipe Show</h1>

      <div className='recipe-upper'>
        <div className='recipe-show-img'>
          <img src="https://images.food52.com/XIZIrmKE5lAjl0ENZMIotx8MXaI=/753x502/21be0f49-43e8-4576-b205-41ccc0b1b413--2017-0427_udis-sponsored-post-2_james-ransom-262.jpg" alt="food-pic-sample" height="100%" width="100%"></img>
        </div>

        <div className='recipe-name-ingredient'>
          {list}
          <div className='recipe-ingredient-box'>
            <h3>Ingredients: </h3>
          </div>
        </div>

      </div>

      <div className='recipe-instructions'>
        <h3>Instructions: </h3>
      </div>
    </div>
  )
}

export default recipeShow
