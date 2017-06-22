import React, {Component} from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Perf from 'react-addons-perf';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Homepage from '../components/Homepage'
import RecipeList from '../components/RecipeList'
import Planner from '../components/Planner'
import RecipeNew from '../components/RecipeNew'
// import RecipeShow from '../components/RecipeShow'
import axios from 'axios'

class RecipesContainer extends Component {
  constructor() {
    super()

    this.state = {
      searchTerm: '',
      recipeData: [],
      clickedRecipe: '',
      clickedId: 0,
      currentDate: moment(),
      selectedDate: 'SELECT DATE',
      selectedMealTime: 'SELECT MEAL',
      plannerToggle: false,
      shoppingListToggle: false,
      plannerData: []
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleDate = this.handleDate.bind(this)
    this.handleMealTime = this.handleMealTime.bind(this)
    this.handlePlannerToggle = this.handlePlannerToggle.bind(this)
    this.handleShoppingToggle = this.handleShoppingToggle.bind(this)
    this.addToPlanner = this.addToPlanner.bind(this)
    this.deletePlannerDate = this.deletePlannerDate.bind(this)
  }

  handleChange(event) {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleDate(date) {
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
  }

  handlePlannerToggle() {
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

    fetch(`http://localhost:3000/api/v1/users/${localStorage.user_id}`)
    .then(response => response.json())
    .then(jsonResponse => this.setState({
      plannerData: jsonResponse.planner_dates
    }))
  }

  componentDidUpdate() {
    Perf.stop()
    Perf.printInclusive()
    Perf.printWasted()
  }

  handleClick(event, recipeId) {
    Perf.start()
    event.preventDefault()
    console.log("handleClick!")
    console.log(recipeId)
    console.log(event.target.innerText)
    this.setState({
      clickedRecipe: event.target.innerText,
      clickedId: recipeId
    })
  }

  addToPlanner(){
    window.location.reload()
    // debugger
    axios.post('http://localhost:3000/api/v1/planner_dates', {
      planner_date: {
        date: this.state.selectedDate,
        user_id: localStorage.user_id,
        recipe_id: this.state.clickedId,
        recipe_name: this.state.clickedRecipe,
        meal_type: this.state.selectedMealTime
      }
    }).then(res => {
      console.log(res.planner)
      localStorage.setItem("planner", res.data)
    }).then( () => this.props.history.push('/recipes'))
      .catch((error) => console.log(error.response) )

    // fetch('http://localhost:3000/api/v1/planner_dates')
    // .then(response => response.json())
    // .then(jsonResponse => this.setState({
    //   plannerData: jsonResponse.planner_dates
    // }))
  }

  deletePlannerDate(id){
    window.location.reload()
    return fetch(`http://localhost:3000/api/v1/planner_dates/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      },
    }).then( res => res.json() )

    // fetch(`http://localhost:3000/api/v1/planner_dates/${id}`)
    // .then(response => response.json())
    // .then(jsonResponse => this.setState({
    //   plannerData: jsonResponse.planner_dates
    // }))
  }


  render() {
    return (
      <div>
          <div className='planner-searchbar animated fadeInRight'>
            <div className="planner-button">
              <Planner
                toggleState={this.state.plannerToggle}
                handlePlannerToggle={this.handlePlannerToggle}
                shoppingListState={this.state.shoppingListToggle}
                shoppingListHandle={this.handleShoppingToggle}
                plannerData={this.state.plannerData}
                clickedRecipe={this.state.clickedRecipe}
                recipeData={this.state.recipeData}
                deletePlannerDate={this.deletePlannerDate}
              />
            </div>
          </div>
          < Route exact path="/" render={() => < Homepage recipeData={this.state.recipeData} handleClick={this.handleClick}/>}/><br/>
          < Route exact path="/recipes" render={() => < RecipeList
            recipeData={this.state.recipeData}
            searchTerm={this.state.searchTerm}
            handleClick={this.handleClick}
            handleIdClick={this.handleIdClick}
            onChange={this.handleChange}
            clickedRecipe={this.state.clickedRecipe}
            currentDate={this.state.currentDate}
            selectedDate={this.state.selectedDate}
            onSelect={this.handleDate}
            selectedMealTime={this.state.selectedMealTime}
            handleMealTime={this.handleMealTime}
            addToPlanner={this.addToPlanner}
          />}/>
          < Route exact path='/recipes/new' component={RecipeNew} />
          {/* < Route exact path='/recipes/1' render={<RecipeShow
            recipeData={this.state.recipeData}
            clickedRecipe={this.state.clickedRecipe}
            currentDate={this.state.currentDate}
            selectedDate={this.state.selectedDate}
            onSelect={this.handleDate}
            selectedMealTime={this.state.selectedMealTime}
            handleMealTime={this.handleMealTime}
            addToPlanner={this.addToPlanner}/>
          }/> */}
      </div>
    )

  }
}

export default RecipesContainer
