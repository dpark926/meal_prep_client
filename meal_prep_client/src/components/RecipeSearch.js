import React from 'react'

function recipeSearch(props) {
  return (
    <div className="recipe-search">
      <input type='text' onChange={props.onChange} placeholder="Search for Meals"></input>
    </div>
  )
}

export default recipeSearch
