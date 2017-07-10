import '../styles/homepage.css';
import mainImg from '../styles/img/hero2-05.jpg'
import button1 from '../styles/img/BUTTON_1.png'
import button2 from '../styles/img/BUTTON_2.png'
import button3 from '../styles/img/BUTTON_3.png'
import React from 'react'
import { Link } from 'react-router-dom'

function Homepage(props) {
  if (props.recipeData.length > 0) {
    let array = props.recipeData
//
    return (
      <div className='homepage'>
        {/* <h1>Homepage</h1> */}

        <div className="main-image">
          <img src={mainImg}></img>
        </div>

        <h3>Featured Recipes</h3>
        <div className='row-container'>
          <div className="buttons">
            <Link to='/recipes'><img src={button1}></img></Link>
          </div>

          <div className="buttons">
            <Link to='/recipes'><img src={button2}></img></Link>
          </div>

          <div className="buttons">
            <Link to='/recipes'><img src={button3}></img></Link>
          </div>
        </div>


        <div className='row-container'>
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

      </div>
    )
  }else {
    return null
  }
}

export default Homepage
