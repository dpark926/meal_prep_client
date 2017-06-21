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

  for(var i = -(todaysDay); i < 7 - todaysDay; i ++) {
    thisWeekDates.push(((todaysDate - todaysDay) + (i + todaysDay)).toString())
  }

  let withinCurrentWeek = []

  if (props.plannerData) {
    withinCurrentWeek = props.plannerData.filter(entry => thisWeekDates.includes(entry.date.slice(8, 10)) )
  }

  let weekObj = {
    sunB: "Add Meal", monB: "Add Meal", tueB: "Add Meal", wedB: "Add Meal", thuB: "Add Meal", friB: "Add Meal", satB: "Add Meal",
    sunL: "Add Meal", monL: "Add Meal", tueL: "Add Meal", wedL: "Add Meal", thuL: "Add Meal", friL: "Add Meal", satL: "Add Meal",
    sunD: "Add Meal", monD: "Add Meal", tueD: "Add Meal", wedD: "Add Meal", thuD: "Add Meal", friD: "Add Meal", satD: "Add Meal",
  }

  for (var i = 0; i < withinCurrentWeek.length; i++) {
    let entry = withinCurrentWeek[i]
    let date = withinCurrentWeek[i].date.slice(0, 3).toLowerCase()
    let mealType = withinCurrentWeek[i].meal_type.slice(0, 1)
    let dateMeal = date + mealType
    // attach meal id somewhere --- need for delete

    weekObj[dateMeal] = entry.recipe_name + entry.id
  }

  // let list = []
  //
  // for (var i = 0; i < Object.values(weekObj).length; i ++) {
  //   let mealDay = Object.values(weekObj)[i]
  //   if(mealDay === "Add Meal") {
  //     list.push(`<td className="unselected"><div>Add Meal</div></td>`)
  //   } else {
  //     list.push(`<td className="selected"><div>${mealDay}</div></td>`)
  //   }
  // }

  let list = Object.values(weekObj).map(function(mealDay) {
    if(mealDay === "Add Meal") {
      return (<td className="unselected">Add Meal</td>)
    } else {
      return (<td className="selected">{mealDay.replace(/[0-9]/g, '')}<br/><button onClick={() => parseInt(props.deletePlannerDate(mealDay.slice(-2)))}>DELETE</button></td>)
    }
  })

  if (props.toggleState) {
    return (
      <div className="planner">
        <button className="accordion" onClick={props.handlePlannerToggle}>Hide Calendar</button>
        <div className='table-padding'>
          <div className='table'>
            <p className='week-range'>WEEK OF: {todaysMonth}/{thisWeekDates[0]} - {todaysMonth}/{thisWeekDates[6]}</p>
            <table>

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
                {/* <td className="unselected"><div>{weekObj.sunB}</div></td>
                <td className="unselected"><div>{weekObj.monB}</div></td>
                <td className="unselected"><div>{weekObj.tueB}</div></td>
                <td className="unselected"><div>{weekObj.wedB}</div></td>
                <td className="unselected"><div>{weekObj.thuB}</div></td>
                <td className="unselected"><div>{weekObj.friB}</div></td>
                <td className="unselected"><div>{weekObj.satB}</div></td> */}
                {list.slice(0, 7)}
              </tr>
              <tr>
                {/* <td className="unselected"><div>{weekObj.sunL}</div></td>
                <td className="unselected"><div>{weekObj.monL}</div></td>
                <td className="unselected"><div>{weekObj.tueL}</div></td>
                <td className="unselected"><div>{weekObj.wedL}</div></td>
                <td className="unselected"><div>{weekObj.thuL}</div></td>
                <td className="unselected"><div>{weekObj.friL}</div></td>
                <td className="unselected"><div>{weekObj.satL}</div></td> */}
                {list.slice(7, 14)}
              </tr>
              <tr>
                {/* <td className="unselected"><div>{weekObj.sunD}</div></td>
                <td className="unselected"><div>{weekObj.monD}</div></td>
                <td className="unselected"><div>{weekObj.tueD}</div></td>
                <td className="unselected"><div>{weekObj.wedD}</div></td>
                <td className="unselected"><div>{weekObj.thuD}</div></td>
                <td className="unselected"><div>{weekObj.friD}</div></td>
                <td className="unselected"><div>{weekObj.satD}</div></td> */}
                {list.slice(14, 21)}
              </tr>
            </table>
          </div>
        </div>


        <GroceryList
          shoppingListState={props.shoppingListState}
          shoppingListHandle={props.shoppingListHandle}
        />
      </div>
    )
  } else {
    return (
      <div className="planner">
        <button className="accordion" onClick={props.handlePlannerToggle}>Show Calendar</button>
      </div>
    )
  }


}

export default Planner
