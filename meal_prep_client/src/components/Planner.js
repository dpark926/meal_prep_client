import React from 'react'
import GroceryList from './GroceryList'

function Planner(props) {
  let recipeData = props.recipeData.map(obj => obj.name)  //All recipe names
  let days = ["Sunday", "Monday", "Tuesday", 'Wednesday', "Thursday", "Friday", "Saturday"]
  let currentDate = new Date()
  let todaysDate = currentDate.getDate()
  let todaysDay = currentDate.getDay()  //[0, 1, 2, 3, 4, 5, 6]
  let todaysMonth = currentDate.getMonth() + 1
  let todaysYear = currentDate.getFullYear()
  let thisWeekDates = [] //array of this current week
  let nextWeekDates = []

  for(var i = -(todaysDay); i < 7 - todaysDay; i ++) {
    thisWeekDates.push(((todaysDate - todaysDay) + (i + todaysDay)).toString())
    nextWeekDates.push(((todaysDate - todaysDay) + (i + todaysDay + 7)).toString())
  }

  let withinCurrentWeek = []
  let withinNextWeek = []

  if (props.plannerData) {
    withinCurrentWeek = props.plannerData.filter(entry => thisWeekDates.includes(entry.date.slice(8, 10)) )
    withinNextWeek = props.plannerData.filter(entry => nextWeekDates.includes(entry.date.slice(8, 10)) )
  }

  let weekObj = {
    sunB: "Add Meal", monB: "Add Meal", tueB: "Add Meal", wedB: "Add Meal", thuB: "Add Meal", friB: "Add Meal", satB: "Add Meal",
    sunL: "Add Meal", monL: "Add Meal", tueL: "Add Meal", wedL: "Add Meal", thuL: "Add Meal", friL: "Add Meal", satL: "Add Meal",
    sunD: "Add Meal", monD: "Add Meal", tueD: "Add Meal", wedD: "Add Meal", thuD: "Add Meal", friD: "Add Meal", satD: "Add Meal",
  }
  let nextObj = {
    sunB: "Add Meal", monB: "Add Meal", tueB: "Add Meal", wedB: "Add Meal", thuB: "Add Meal", friB: "Add Meal", satB: "Add Meal",
    sunL: "Add Meal", monL: "Add Meal", tueL: "Add Meal", wedL: "Add Meal", thuL: "Add Meal", friL: "Add Meal", satL: "Add Meal",
    sunD: "Add Meal", monD: "Add Meal", tueD: "Add Meal", wedD: "Add Meal", thuD: "Add Meal", friD: "Add Meal", satD: "Add Meal",
  }

  for (var i = 0; i < withinCurrentWeek.length; i++) {
    let entry = withinCurrentWeek[i]
    let date = withinCurrentWeek[i].date.slice(0, 3).toLowerCase()
    let mealType = withinCurrentWeek[i].meal_type.slice(0, 1)
    let dateMeal = date + mealType

    weekObj[dateMeal] = entry.recipe_name + entry.id
  }
  for (var i = 0; i < withinNextWeek.length; i++) {
    let entry2 = withinNextWeek[i]
    let date2 = withinNextWeek[i].date.slice(0, 3).toLowerCase()
    let mealType2 = withinNextWeek[i].meal_type.slice(0, 1)
    let dateMeal2 = date2 + mealType2

    nextObj[dateMeal2] = entry2.recipe_name + entry2.id
  }

  let list = Object.values(weekObj).map(function(mealDay) {
    if(mealDay === "Add Meal") {
      return (<td className="unselected" id={mealDay.replace(/[0-9]/g, '')}>Add Meal</td>)
    } else {
      return (<td className="selected" id={mealDay.replace(/[0-9]/g, '')}>{mealDay.replace(/[0-9]/g, '')}<br/><button className='delete' onClick={() => parseInt(props.deletePlannerDate(mealDay.replace(/\D/g, '')))}>DELETE</button></td>)
    }
  })
  let list2 = Object.values(nextObj).map(function(mealDay) {
    if(mealDay === "Add Meal") {
      return (<td className="unselected" id={mealDay.replace(/[0-9]/g, '')}>Add Meal</td>)
    } else {
      return (<td className="selected" id={mealDay.replace(/[0-9]/g, '')}>{mealDay.replace(/[0-9]/g, '')}<br/><button className='delete' onClick={() => parseInt(props.deletePlannerDate(mealDay.replace(/\D/g, '')))}>DELETE</button></td>)
    }
  })

  if (props.toggleState) {
    if (props.mealToggle) {
      return (
        <div className="planner">
          <button className="accordion" onClick={props.handlePlannerToggle}>Hide Calendar</button>
          <div className='table-padding'>
            <div className='table animated slideInDown'>
              <p className='week-range'>WEEK OF: {todaysMonth}/{thisWeekDates[0]} - {todaysMonth}/{thisWeekDates[6]}</p>

              <table className='animated fadeInLeft'>
                <tr className="table-categories">
                  <th>SUNDAY</th>
                  <th>MONDAY</th>
                  <th>TUESDAY</th>
                  <th>WEDNESDAY</th>
                  <th>THURSDAY</th>
                  <th>FRIDAY</th>
                  <th>SATURDAY</th>
                </tr>
                <tr>
                  {list.slice(0, 7)}
                </tr>
                <tr>
                  {list.slice(7, 14)}
                </tr>
                <tr>
                  {list.slice(14, 21)}
                </tr>
              </table>

              <div className="right-arrow"><button onClick={props.handleMealToggle} className="accordion">Next Week >>>></button></div>
            </div>
          </div>


          <GroceryList
            shoppingListState={props.shoppingListState}
            shoppingListHandle={props.shoppingListHandle}
          />
        </div>
      )
    }else {
      return (
        <div className="planner">
          <button className="accordion" onClick={props.handlePlannerToggle}>Hide Calendar</button>
          <div className='table-padding'>
            <div className='table animated slideInDown'>
              <p className='week-range'>WEEK OF: {todaysMonth}/{nextWeekDates[0]} - {todaysMonth}/{nextWeekDates[6]}</p>
              <table className='animated fadeInRight'>

                <tr className="table-categories">
                  <th>SUNDAY</th>
                  <th>MONDAY</th>
                  <th>TUESDAY</th>
                  <th>WEDNESDAY</th>
                  <th>THURSDAY</th>
                  <th>FRIDAY</th>
                  <th>SATURDAY</th>
                </tr>
                <tr>
                  {list2.slice(0, 7)}
                </tr>
                <tr>
                  {list2.slice(7, 14)}
                </tr>
                <tr>
                  {list2.slice(14, 21)}
                </tr>
              </table>

              <div className="right-arrow"><button onClick={props.handleMealToggle} className="accordion">{`<<<< Current Week`}</button></div>
            </div>
          </div>

          <GroceryList
            shoppingListState={props.shoppingListState}
            shoppingListHandle={props.shoppingListHandle}
          />
        </div>
      )
    }
  } else {
    return (
      <div className="planner">
        <button className="accordion" onClick={props.handlePlannerToggle}>Show Calendar</button>
      </div>
    )
  }


}

export default Planner
