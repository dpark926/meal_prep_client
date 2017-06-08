import React, {Component} from 'react'
import Homepage from '../components/Homepage'
import RecipeList from '../components/RecipeList'
import RecipeSearch from '../components/RecipeSearch'
import RecipeNew from '../components/RecipeNew'
import RecipeShow from '../components/RecipeShow'

class RecipesContainer extends Component {
  constructor() {
    super()

    this.state = {
      searchTerm: '',
      recipeData: [
        // {
        //   "id": 1,
        //   "name": "Blueberry Walnut Salad",
        //   "instructions": "In a large bowl, toss the salad greens with the blueberries, walnuts, and raspberry vinaigrette. Top with feta cheese to serve.",
        //   "calories": 128,
        //   "author_id": 1,
        //   "created_at": "2017-06-06T20:29:39.562Z",
        //   "updated_at": "2017-06-06T20:29:39.562Z"
        // },
        // {
        //   "id": 2,
        //   "name": "Reuben Sandwich",
        //   "instructions": "1. Spread each slice of bread with thousand island dressing. Top 4 of the bread slices with sauerkraut, cheese and pastrami. Place remaining bread slices on sandwich. Spread margarine on the outsides of each sandwich. 2. Heat a large skillet over medium high heat. Grill until browned, then turn and grill until heated through, and cheese is melted.",
        //   "calories": 198,
        //   "author_id": 2,
        //   "created_at": "2017-06-06T20:29:39.569Z",
        //   "updated_at": "2017-06-06T20:29:39.569Z"
        // },
        // {
        //   "id": 3,
        //   "name": "Margarita Grilled Shrimp",
        //   "instructions": "1. Stir shrimp, olive oil, cilantro, lime juice, garlic, tequila, cayenne pepper, and salt together in a bowl. Cover the bowl with plastic wrap and refrigerate shrimp in marinade for 30 minutes. 2. Preheat an outdoor grill for high heat and lightly oil grate. 3. Remove shrimp from bowl and thread onto skewers; discard marinade. 4. Cook on the preheated grill until shrimp turn pink, 2 to 3 minutes per side.",
        //   "calories": 188,
        //   "author_id": 3,
        //   "created_at": "2017-06-06T20:29:39.569Z",
        //   "updated_at": "2017-06-06T20:29:39.569Z"
        // },
        // {
        //   "id": 4,
        //   "name": "Lentil and Ham Soup",
        //   "instructions": "In a 3 1/2 quart or larger slow cooker combine the lentils, celery, carrots, onion, garlic and ham. Season with basil, thyme, oregano, the bay leaf and pepper. Stir in the chicken broth, water and tomato sauce. Cover and cook on Low for 11 hours. Discard the bay leaf before serving.",
        //   "calories": 222,
        //   "author_id": 4,
        //   "created_at": "2017-06-06T20:29:39.569Z",
        //   "updated_at": "2017-06-06T20:29:39.569Z"
        // }
      ],
      clickedRecipe: ''
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

  componentDidMount() {
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
        <RecipeSearch onChange={this.handleChange}/><br/>
        <Homepage recipeData={this.state.recipeData}/><br/>
        <RecipeList recipeData={this.state.recipeData} searchTerm={this.state.searchTerm} handleClick={this.handleClick}/><br/>
        <RecipeNew /><br/>
        <RecipeShow recipeData={this.state.recipeData} clickedRecipe={this.state.clickedRecipe}/>
      </div>
    )
  }
}

export default RecipesContainer
