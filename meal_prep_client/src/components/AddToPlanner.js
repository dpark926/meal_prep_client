import '../styles/planner.css';
import React from 'react'
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

function AddToPlanner(props) {
  let selectedDate
  let mealTime

  if (props.selectedDate !== "SELECT DATE") {
    selectedDate = <button className="dropbtn-unselected">{props.selectedDate.slice(0, 10).toUpperCase()}</button>
  } else {
    selectedDate = <button className="dropbtn-selected">{props.selectedDate}</button>
  }

  if (props.selectedMealTime !== "SELECT MEAL") {
    mealTime = <button className="dropbtn-unselected">{props.selectedMealTime}</button>
  } else {
    mealTime = <button className="dropbtn-selected">{props.selectedMealTime}</button>
  }

  return (
    <div className="AddToPlanner">
      <div className="dropdown">
        {selectedDate}
        <div className="dropdown-content">
          <DatePicker className="datepicker" selected={props.currentDate} onSelect={props.onSelect} />
        </div>
      </div>

      <div className="dropdown">
        {mealTime}
        <div className="dropdown-content">
          <a href="#" onClick={props.handleMealTime}>BREAKFAST</a>
          <a href="#" onClick={props.handleMealTime}>LUNCH</a>
          <a href="#" onClick={props.handleMealTime}>DINNER</a>
        </div>
      </div><br/>
      {/* <p>{props.currentDate._d.constructor()}</p><br/>
      <p>Selected Date: {props.selectedDate}</p>
      <p>Selected Meal Time: {props.selectedMealTime}</p> */}
      <input className="plannerSubmit" type='submit' onClick={props.addToPlanner} value="ADD TO PLANNER"></input>
    </div>
  )
}

export default AddToPlanner
