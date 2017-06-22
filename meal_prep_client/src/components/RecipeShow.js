import '../styles/recipeShow.css';
import React from 'react'
import AddToPlanner from './AddToPlanner'
import moment from 'moment';
import img1 from '../styles/img/recipeimgs/show1.jpg'
import img2 from '../styles/img/recipeimgs/show2.jpg'
import img3 from '../styles/img/recipeimgs/show3.jpg'
import img4 from '../styles/img/recipeimgs/show4.jpg'
import img5 from '../styles/img/recipeimgs/show5.jpg'
import img6 from '../styles/img/recipeimgs/show6.jpg'
import img7 from '../styles/img/recipeimgs/show7.jpg'
import img8 from '../styles/img/recipeimgs/show8.jpg'
import img9 from '../styles/img/recipeimgs/show9.jpg'
import img10 from '../styles/img/recipeimgs/show10.jpg'
import img11 from '../styles/img/recipeimgs/show11.jpg'
import img12 from '../styles/img/recipeimgs/show12.jpg'
import img13 from '../styles/img/recipeimgs/show13.jpg'
import img14 from '../styles/img/recipeimgs/show14.jpg'
import img15 from '../styles/img/recipeimgs/show15.jpg'
import img16 from '../styles/img/recipeimgs/show15.jpg'

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
    <div>
      <p>{ingredient.name}</p>
    </div>
  )
  // debugger
  // console.log(ingredientList)

  let imgArray = [
    img1, img2, img3, img4, img5, img6, img7, img8,
    img9, img10, img11, img12, img13, img14, img15, img16
  ]

  var list = newArray.map( (recipe, i) =>
    (
    <div className='recipe-upper'>
      <div className='recipe-name'>
      {/* <div className='recipe-name' id={`${recipe.id}`}> */}
        <p>{recipe.name.toUpperCase()}</p>
      </div>
      <div className='recipe-show-img'>
        <img src={imgArray[i]} alt="food-pic-sample" height="100%" width="100%"></img>
      </div>

      <div className='recipe-name-ingredient'>
        <div className='recipe-ingredient-box'>
          <h5>INGREDIENTS </h5>
          {ingredientList}
        </div>
        <div className='recipe-instructions'>
          {/* <h4>Calories: {recipe.calories}</h4> */}
          {/* <p>Recipe ID: {recipe.id}</p> */}
          <h5>INSTRUCTIONS </h5>
          <p>{recipe.instructions}</p>
        </div>
      </div>
    </div>
    )
  )

  if (!localStorage.getItem('token')) {
    return (
      <div className="recipe-show">
        {/* <h1>Recipe Show</h1> */}
        {list}
      </div>
    )
  } else {
    return (
      <div className="recipe-show">
        {/* <h1>Recipe Show</h1> */}
        {list}
        <AddToPlanner
          currentDate={props.currentDate}
          selectedDate={props.selectedDate}
          onSelect={props.onSelect}
          selectedMealTime={props.selectedMealTime}
          handleMealTime={props.handleMealTime}
          addToPlanner={props.addToPlanner}
        />
      </div>
    )
  }
}

export default recipeShow
