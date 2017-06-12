import React from 'react'
import GroceryList from './GroceryList'

function Planner(props) {
  let days = ["Sunday", "Monday", "Tuesday", 'Wednesday', "Thursday", "Friday", "Saturday"]
  let currentDate = new Date()
  let todaysDate = currentDate.getDate()
  let todaysDay = currentDate.getDay()
  let todaysMonth = currentDate.getMonth() + 1
  let todaysYear = currentDate.getFullYear()
  let week1

  if (todaysDay === 0) {
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
  // let todaysDate = days[currentDate.getDay()] + ", " + month + "/" + day + "/" + year

  if (props.toggleState) {
    return (
      <div className="planner">
        <button className="accordion" onClick={props.handlePlannerToggle}>Hide Calendar</button>
        <table>
          <tr><td></td></tr>
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
