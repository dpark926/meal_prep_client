import React from 'react'

function Homepage(props) {
  if (props.recipeData.length > 0) {
    let array = props.recipeData
    console.log(array[0].name)

    return (
      <div className='homepage'>
        <h1>Homepage</h1>
        <h3>Featured Recipes</h3>
        <div className="recipe-featured-box">
          <a href='#'><h4 onClick={props.handleClick}>{array[0].name}</h4></a>
        </div>


        <div className="recipe-featured-box">
          <a href='#'><h4 onClick={props.handleClick}>{array[2].name}</h4></a>
        </div>


        <div className="recipe-featured-box">
          <a href='#'><h4 onClick={props.handleClick}>{array[3].name}</h4></a>
        </div>

      </div>
    )
  }else {
    return null
  }
}

export default Homepage
