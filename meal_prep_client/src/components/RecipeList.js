import '../styles/recipeList.css';
import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import RecipeSearch from './RecipeSearch'
import RecipeShow from './RecipeShow'
import img1 from '../styles/img/recipeimgs/img-09.jpg'
import img2 from '../styles/img/recipeimgs/img-10.jpg'
import img3 from '../styles/img/recipeimgs/img-11.jpg'
import img4 from '../styles/img/recipeimgs/img-12.jpg'
import img5 from '../styles/img/recipeimgs/img-13.jpg'
import img6 from '../styles/img/recipeimgs/img-14.jpg'
import img7 from '../styles/img/recipeimgs/img-15.jpg'
import img8 from '../styles/img/recipeimgs/img-24.jpg'
import img9 from '../styles/img/recipeimgs/img-17.jpg'
import img10 from '../styles/img/recipeimgs/img-18.jpg'
import img11 from '../styles/img/recipeimgs/img-19.jpg'
import img12 from '../styles/img/recipeimgs/img-20.jpg'
import img13 from '../styles/img/recipeimgs/img-21.jpg'
import img14 from '../styles/img/recipeimgs/img-22.jpg'
import img15 from '../styles/img/recipeimgs/img-23.jpg'
import img16 from '../styles/img/recipeimgs/img-24.jpg'
import addIcon from '../styles/img/recipeimgs/1497857929_add.png'

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

  let imgArray = [
    img1, img2, img3, img4, img5, img6, img7, img8,
    img9, img10, img11, img12, img13, img14, img15, img16
  ]

  let list = newArray.map((recipe, i) =>  {
    return(
      <div className="recipe-box">
        <div className="recipe-list-img">
          <img src={imgArray[i]}></img>
        </div>
        <div className="recipe-list-title">
          <Link to={`/recipes/${recipe.id}`} id={recipe.id}><h4 onClick={(event) => props.handleClick(event, recipe.id)}>{recipe.name}</h4></Link>
          {/* <p>Calories: {recipe.calories}</p> */}
        </div>
      </div>
    )
  })
  // debugger

  if (!localStorage.getItem('token')) {
    return (
      <div className="recipe-list">
        <RecipeSearch onChange={props.onChange}/><br/>
        {/* <h2>Recipe List</h2> */}
        {list}

        <RecipeShow
          recipeData={props.recipeData}
          clickedRecipe={props.clickedRecipe}
        /><br/>
      </div>
    )
  } else {
    return (
      <div className="recipe-list">
        <RecipeSearch onChange={props.onChange}/><br/>
        {/* <h2>Recipe List</h2> */}
        {list}
        <Link to='/recipes/new'>
          <div className="recipe-box">
            <div className="recipe-blank-img">
              <img src={addIcon}></img>
            </div>
            <div className="recipe-list-title">
              <h4>+ Add a New Recipe</h4>
              {/* <p>+ Add a New Recipe</p> */}
            </div>
          </div>
        </Link>

        {/* <Switch>
          <Route exact path='/recipes/1' render={ ({match}) =>
            <RecipeShow
            recipeData={props.recipeData}
            clickedRecipe={props.clickedRecipe}
            currentDate={props.currentDate}
            selectedDate={props.selectedDate}
            onSelect={props.onSelect}
            selectedMealTime={props.selectedMealTime}
            handleMealTime={props.handleMealTime}
            addToPlanner={props.addToPlanner}/>
          }/>
          <Route path='/recipes/new' component={RecipeNew} />
        </Switch> */}

        <RecipeShow
          recipeData={props.recipeData}
          clickedRecipe={props.clickedRecipe}
          currentDate={props.currentDate}
          selectedDate={props.selectedDate}
          onSelect={props.onSelect}
          selectedMealTime={props.selectedMealTime}
          handleMealTime={props.handleMealTime}
          addToPlanner={props.addToPlanner}
        /><br/>

      </div>
    );
  }
}

export default recipeList
