import React from 'react'
import GroceryList from './GroceryList'

function Planner(props) {

  // debugger

  // console.log("plannerData: " + props.plannerData[props.plannerData.length - 1])
  console.log("length: " + props.plannerData.length)
  let days = ["Sunday", "Monday", "Tuesday", 'Wednesday', "Thursday", "Friday", "Saturday"]
  let currentDate = new Date()
  let todaysDate = currentDate.getDate()
  let todaysDay = currentDate.getDay()
  let todaysMonth = currentDate.getMonth() + 1
  let todaysYear = currentDate.getFullYear()
  let week1
  let thisWeekDates

  if (todaysDay === 0) {
    thisWeekDates = [todaysDate, todaysDate + 1, todaysDate + 2, todaysDate + 3, todaysDate + 4, todaysDate + 5, todaysDate + 6]
    week1 = (
      <tr className="table-categories">
        <th>{days[todaysDay] + ", " + todaysMonth + "/" + (todaysDate) + "/" + todaysYear}</th>
        <th>{days[todaysDay + 1] + ", " + todaysMonth + "/" + (todaysDate + 1) + "/" + todaysYear}</th>
        <th>{days[todaysDay + 2] + ", " + todaysMonth + "/" + (todaysDate + 2) + "/" + todaysYear}</th>
        <th>{days[todaysDay + 3] + ", " + todaysMonth + "/" + (todaysDate + 3) + "/" + todaysYear}</th>
        <th>{days[todaysDay + 4] + ", " + todaysMonth + "/" + (todaysDate + 4) + "/" + todaysYear}</th>
        <th>{days[todaysDay + 5] + ", " + todaysMonth + "/" + (todaysDate + 5) + "/" + todaysYear}</th>
        <th>{days[todaysDay + 6] + ", " + todaysMonth + "/" + (todaysDate + 6) + "/" + todaysYear}</th>
      </tr>
    )
  } else if (todaysDay === 1) {
    thisWeekDates = [todaysDate - 1, todaysDate, todaysDate + 1, todaysDate + 2, todaysDate + 3, todaysDate + 4, todaysDate + 5]
    week1 = (
      <tr className="table-categories">
        <th>{days[todaysDay - 1] + ", " + todaysMonth + "/" + (todaysDate - 1) + "/" + todaysYear}</th>
        <th>{days[todaysDay] + ", " + todaysMonth + "/" + (todaysDate) + "/" + todaysYear}</th>
        <th>{days[todaysDay + 1] + ", " + todaysMonth + "/" + (todaysDate + 1) + "/" + todaysYear}</th>
        <th>{days[todaysDay + 2] + ", " + todaysMonth + "/" + (todaysDate + 2) + "/" + todaysYear}</th>
        <th>{days[todaysDay + 3] + ", " + todaysMonth + "/" + (todaysDate + 3) + "/" + todaysYear}</th>
        <th>{days[todaysDay + 4] + ", " + todaysMonth + "/" + (todaysDate + 4) + "/" + todaysYear}</th>
        <th>{days[todaysDay + 5] + ", " + todaysMonth + "/" + (todaysDate + 5) + "/" + todaysYear}</th>
      </tr>
    )
  } else if (todaysDay === 2) {
    thisWeekDates = [todaysDate - 2, todaysDate - 1, todaysDate, todaysDate + 1, todaysDate + 2, todaysDate + 3, todaysDate + 4]
    week1 = (
      <tr className="table-categories">
        <th>{days[todaysDay - 2] + ", " + todaysMonth + "/" + (todaysDate - 2) + "/" + todaysYear}</th>
        <th>{days[todaysDay - 1] + ", " + todaysMonth + "/" + (todaysDate - 1) + "/" + todaysYear}</th>
        <th>{days[todaysDay] + ", " + todaysMonth + "/" + (todaysDate) + "/" + todaysYear}</th>
        <th>{days[todaysDay + 1] + ", " + todaysMonth + "/" + (todaysDate + 1) + "/" + todaysYear}</th>
        <th>{days[todaysDay + 2] + ", " + todaysMonth + "/" + (todaysDate + 2) + "/" + todaysYear}</th>
        <th>{days[todaysDay + 3] + ", " + todaysMonth + "/" + (todaysDate + 3) + "/" + todaysYear}</th>
        <th>{days[todaysDay + 4] + ", " + todaysMonth + "/" + (todaysDate + 4) + "/" + todaysYear}</th>
      </tr>
    )
  } else if (todaysDay === 3) {
    thisWeekDates = [todaysDate - 3, todaysDate - 2, todaysDate - 1, todaysDate, todaysDate + 1, todaysDate + 2, todaysDate + 3]
    week1 = (
      <tr className="table-categories">
        <th>{days[todaysDay - 3] + ", " + todaysMonth + "/" + (todaysDate - 3) + "/" + todaysYear}</th>
        <th>{days[todaysDay - 2] + ", " + todaysMonth + "/" + (todaysDate - 2) + "/" + todaysYear}</th>
        <th>{days[todaysDay - 1] + ", " + todaysMonth + "/" + (todaysDate - 1) + "/" + todaysYear}</th>
        <th>{days[todaysDay] + ", " + todaysMonth + "/" + (todaysDate) + "/" + todaysYear}</th>
        <th>{days[todaysDay + 1] + ", " + todaysMonth + "/" + (todaysDate + 1) + "/" + todaysYear}</th>
        <th>{days[todaysDay + 2] + ", " + todaysMonth + "/" + (todaysDate + 2) + "/" + todaysYear}</th>
        <th>{days[todaysDay + 3] + ", " + todaysMonth + "/" + (todaysDate + 3) + "/" + todaysYear}</th>
      </tr>
    )
  } else if (todaysDay === 4) {
    thisWeekDates = [todaysDate - 4, todaysDate - 3, todaysDate - 2, todaysDate - 1, todaysDate, todaysDate + 1, todaysDate + 2]
    week1 = (
      <tr className="table-categories">
        <th>{days[todaysDay - 4] + ", " + todaysMonth + "/" + (todaysDate - 4) + "/" + todaysYear}</th>
        <th>{days[todaysDay - 3] + ", " + todaysMonth + "/" + (todaysDate - 3) + "/" + todaysYear}</th>
        <th>{days[todaysDay - 2] + ", " + todaysMonth + "/" + (todaysDate - 2) + "/" + todaysYear}</th>
        <th>{days[todaysDay - 1] + ", " + todaysMonth + "/" + (todaysDate - 1) + "/" + todaysYear}</th>
        <th>{days[todaysDay] + ", " + todaysMonth + "/" + (todaysDate) + "/" + todaysYear}</th>
        <th>{days[todaysDay + 1] + ", " + todaysMonth + "/" + (todaysDate + 1) + "/" + todaysYear}</th>
        <th>{days[todaysDay + 2] + ", " + todaysMonth + "/" + (todaysDate + 2) + "/" + todaysYear}</th>
      </tr>
    )
  } else if (todaysDay === 5) {
    thisWeekDates = [todaysDate - 5, todaysDate - 4, todaysDate - 3, todaysDate - 2, todaysDate - 1, todaysDate, todaysDate + 1]
    week1 = (
      <tr className="table-categories">
        <th>{days[todaysDay - 5] + ", " + todaysMonth + "/" + (todaysDate - 5) + "/" + todaysYear}</th>
        <th>{days[todaysDay - 4] + ", " + todaysMonth + "/" + (todaysDate - 4) + "/" + todaysYear}</th>
        <th>{days[todaysDay - 3] + ", " + todaysMonth + "/" + (todaysDate - 3) + "/" + todaysYear}</th>
        <th>{days[todaysDay - 2] + ", " + todaysMonth + "/" + (todaysDate - 2) + "/" + todaysYear}</th>
        <th>{days[todaysDay - 1] + ", " + todaysMonth + "/" + (todaysDate - 1) + "/" + todaysYear}</th>
        <th>{days[todaysDay] + ", " + todaysMonth + "/" + (todaysDate) + "/" + todaysYear}</th>
        <th>{days[todaysDay + 1] + ", " + todaysMonth + "/" + (todaysDate + 1) + "/" + todaysYear}</th>
      </tr>
    )
  } else if (todaysDay === 6) {
    thisWeekDates = [todaysDate - 6, todaysDate - 5, todaysDate - 4, todaysDate - 3, todaysDate - 2, todaysDate - 1, todaysDate]
    week1 = (
      <tr className="table-categories">
        <th>{days[todaysDay + 1] + ", " + todaysMonth + "/" + (todaysDate + 1) + "/" + todaysYear}</th>
        <th>{days[todaysDay + 2] + ", " + todaysMonth + "/" + (todaysDate + 2) + "/" + todaysYear}</th>
        <th>{days[todaysDay + 3] + ", " + todaysMonth + "/" + (todaysDate + 3) + "/" + todaysYear}</th>
        <th>{days[todaysDay + 4] + ", " + todaysMonth + "/" + (todaysDate + 4) + "/" + todaysYear}</th>
        <th>{days[todaysDay + 5] + ", " + todaysMonth + "/" + (todaysDate + 5) + "/" + todaysYear}</th>
        <th>{days[todaysDay + 6] + ", " + todaysMonth + "/" + (todaysDate + 6) + "/" + todaysYear}</th>
        <th>{days[todaysDay + 7] + ", " + todaysMonth + "/" + (todaysDate + 7) + "/" + todaysYear}</th>
      </tr>
    )
  }
  console.log('thisWeekDates: ' + thisWeekDates)
  let thisWeekDatesString = thisWeekDates.map(num => num.toString())
  let withinCurrentWeek = props.plannerData.filter(entry => thisWeekDatesString.includes(entry.date.slice(8, 10)) && entry.user_id.toString() === localStorage.user )
  console.log("withinCurrentWeek: " + withinCurrentWeek)
  console.log("withinCurrentWeek length: " + withinCurrentWeek.length)
  // debugger

  // let todaysDate = days[currentDate.getDay()] + ", " + month + "/" + day + "/" + year

  if (props.toggleState) {
    return (
      <div className="planner">
        <button className="accordion" onClick={props.handlePlannerToggle}>Hide Calendar</button>

        <div className='table'>
          <table>

            {week1}

            <tr>
              <td className="unselected"><div>BREAKFAST</div></td>
              <td className="unselected"><div>BREAKFAST</div></td>
              <td className="selected"><div>Cereal</div></td>
              <td className="unselected"><div>BREAKFAST</div></td>
              <td className="selected"><div>Yogurt</div></td>
              <td className="selected"><div>Oatmeal</div></td>
              <td className="unselected"><div>BREAKFAST</div></td>
            </tr>
            <tr>
              <td className="unselected"><div>LUNCH</div></td>
              <td className="selected"><div>Reuben Sandwich</div></td>
              <td className="selected"><div>Tuna Salad</div></td>
              <td className="selected"><div>Lentil and Ham Soup</div></td>
              <td className="unselected"><div>LUNCH</div></td>
              <td className="unselected"><div>LUNCH</div></td>
              <td className="unselected"><div>LUNCH</div></td>
            </tr>
            <tr>
              <td className="unselected"><div>DINNER</div></td>
              <td className="unselected"><div>DINNER</div></td>
              <td className="selected"><div>Margarita Grilled Shrimp</div></td>
              <td className="selected"><div>Happy Meal</div></td>
              <td className="selected"><div>Lentil and Ham Soup</div></td>
              <td className="unselected"><div>DINNER</div></td>
              <td className="unselected"><div>DINNER</div></td>
            </tr>
          </table>
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
