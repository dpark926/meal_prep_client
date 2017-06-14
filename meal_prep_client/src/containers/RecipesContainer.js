import React, {Component} from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Homepage from '../components/Homepage'
import RecipeList from '../components/RecipeList'
import Planner from '../components/Planner'

class RecipesContainer extends Component {
  constructor() {
    super()

    this.state = {
      searchTerm: '',
      recipeData: [],
      clickedRecipe: '',
      currentDate: moment(),
      selectedDate: '',
      selectedMealTime: '',
      plannerToggle: false,
      shoppingListToggle: false,

    }

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleDate = this.handleDate.bind(this)
    this.handleMealTime = this.handleMealTime.bind(this)
    this.handlePlannerToggle = this.handlePlannerToggle.bind(this)
    this.handleShoppingToggle = this.handleShoppingToggle.bind(this)

  }

  handleChange(event) {
    console.log("handleChange!")
    // console.log("currentDate: " + this.state.currentDate)
    this.setState({
      searchTerm: event.target.value
    })
    console.log(this.state.searchTerm)
  }

  handleDate(date) {
    console.log("DATE!")
    this.setState({
      currentDate: date,
      selectedDate: date._d.toString()
    })
  }

  handleMealTime(event) {
    event.preventDefault()
    this.setState({
      selectedMealTime: event.target.innerText
    })
    debugger
  }

  handlePlannerToggle() {
    console.log("TOGGLE!")
    // debugger
    // console.log("currentDate: " + this.state.currentDate)
    this.setState({
      plannerToggle: !this.state.plannerToggle
    })
  }

  handleShoppingToggle() {
    this.setState({
      shoppingListToggle: !this.state.shoppingListToggle
    })
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

  // addRecipeToPlanner() {
  //   return fetch("http://localhost:3000/api/v1/planner", {
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json',
  //       'Authorization': localStorage.getItem('token')
  //     },
  //     method: 'POST',
  //     body: JSON.stringify( {student: {name: name}} )
  //   }).then( res => res.json() )
  // }

  render() {

    return (
      <div>
        {/* <Switch> */}
          <div className='planner-searchbar'>
            <Link to='/recipes'><div className='nav-category'>RECIPES</div></Link>
            <div className="planner-button">
              <Planner
                toggleState={this.state.plannerToggle}
                handlePlannerToggle={this.handlePlannerToggle}
                shoppingListState={this.state.shoppingListToggle}
                shoppingListHandle={this.handleShoppingToggle}
              />
            </div>
          </div>
          {/* <Login
            handleUserName={this.handleUserName}
            userName={this.state.username}
            password={this.state.password}
            handlePassword={this.handlePassword}
            handleSubmit={this.handleSubmit}
          /> */}
          {/* <Homepage recipeData={this.state.recipeData} handleClick={this.handleClick} /><br/> */}
          < Route exact path="/" render={() => < Homepage recipeData={this.state.recipeData} handleClick={this.handleClick}/>}/><br/>
          < Route path="/recipes" render={() => < RecipeList
            recipeData={this.state.recipeData}
            searchTerm={this.state.searchTerm}
            handleClick={this.handleClick}
            onChange={this.handleChange}
            clickedRecipe={this.state.clickedRecipe}
            currentDate={this.state.currentDate}
            selectedDate={this.state.selectedDate}
            onSelect={this.handleDate}
            selectedMealTime={this.state.selectedMealTime}
            handleMealTime={this.handleMealTime}
          />}/><br/>
          {/* <RecipeList
            recipeData={this.state.recipeData}
            searchTerm={this.state.searchTerm}
            handleClick={this.handleClick}
            onChange={this.handleChange}
            clickedRecipe={this.state.clickedRecipe}
            currentDate={this.state.currentDate}
            selectedDate={this.state.selectedDate}
            onSelect={this.handleDate}
            selectedMealTime={this.state.selectedMealTime}
            handleMealTime={this.handleMealTime}
          /><br/> */}
        {/* </Switch> */}
      </div>
    )

  }
}

export default RecipesContainer
