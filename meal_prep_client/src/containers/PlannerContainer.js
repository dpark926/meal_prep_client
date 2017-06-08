import React, {Component} from 'react'

class PlannerContainer extends Component {
  constructor() {
    super()

    this.state = {
      searchTerm: '',
      recipeData: [],
      clickedRecipe: ''
    }
  }

  render() {
    return (
      <div>
        Planner
      </div>
    )
  }
}

export default PlannerContainer
