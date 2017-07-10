import React, {Component} from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Homepage from '../components/Homepage'
import RecipeList from '../components/RecipeList'
import RecipeShow from '../components/RecipeShow'

class RecipesContainer extends Component {
  constructor() {
    super()

    this.state = {
      searchTerm: '',
      recipeData: [],
      clickedRecipe: '',
      clickedId: 0
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

  handleClick(event, recipeId) {
    // debugger
    this.setState({
      clickedRecipe: event.target.innerText,
      clickedId: recipeId
    })
  }

  render() {

    return (
      <div>
        < Route exact path="/" render={() => < Homepage recipeData={this.state.recipeData} handleClick={this.handleClick}/>}/><br/>
        < Route exact path="/recipes" render={() => < RecipeList
          // recipeData={this.state.recipeData}
          // searchTerm={this.state.searchTerm}
          // handleClick={this.handleClick}
          // onChange={this.handleChange}
          // clickedRecipe={this.state.clickedRecipe}

          recipeData={this.state.recipeData}
          searchTerm={this.state.searchTerm}
          handleClick={this.handleClick}
          handleIdClick={this.handleIdClick}
          onChange={this.handleChange}
          clickedRecipe={this.state.clickedRecipe}
          clickedId={this.state.clickedId}
        />}/>
        < Route exact path={`/recipes/${this.state.clickedId}`} render={() => <RecipeShow
          recipeData={this.state.recipeData}
          clickedRecipe={this.state.clickedRecipe}
          // currentDate={this.state.currentDate}
          // selectedDate={this.state.selectedDate}
          // onSelect={this.handleDate}
          // selectedMealTime={this.state.selectedMealTime}
          // handleMealTime={this.handleMealTime}
          // addToPlanner={this.addToPlanner}
          clickedId={this.state.clickedId}/>
        }/>
      </div>
    )
  }
}

export default RecipesContainer
