import React, {Component} from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Homepage from '../components/Homepage'
import RecipeList from '../components/RecipeList'

class RecipesContainer extends Component {
  constructor() {
    super()

    this.state = {
      searchTerm: '',
      recipeData: [],
      clickedRecipe: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(event) {
    console.log("handleChange!")
    this.setState({
      searchTerm: event.target.value
    })
    console.log(this.state.searchTerm)
  }

  componentWillMount() {
    const URL = 'http://localhost:3000/api/v1/recipes'

    fetch(URL)
    .then(response => response.json())
    .then(jsonResponse => this.setState({
      recipeData: jsonResponse
    }))
  }

  handleClick(event) {
    event.preventDefault()
    console.log("handleClick!")
    this.setState({
      clickedRecipe: event.target.innerText
    })
  }

  render() {

    return (
      <div>
        < Route exact path="/" render={() => < Homepage recipeData={this.state.recipeData} handleClick={this.handleClick}/>}/><br/>
        < Route path="/recipes" render={() => < RecipeList
          recipeData={this.state.recipeData}
          searchTerm={this.state.searchTerm}
          handleClick={this.handleClick}
          onChange={this.handleChange}
          clickedRecipe={this.state.clickedRecipe}
        />}/><br/>
      </div>
    )
  }
}

export default RecipesContainer
