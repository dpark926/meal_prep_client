import React from 'react'
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

function AddToPlanner(props) {
  // debugger
  return (
    <div className="AddToPlanner">
      <div className="dropdown">
        <button className="dropbtn">SELECT DATE</button>
        <div className="dropdown-content">
          <DatePicker selected={props.currentDate} onSelect={props.onSelect} />
        </div>
      </div>

      <div className="dropdown">
        <button className="dropbtn">SELECT MEAL TIME</button>
        <div className="dropdown-content">
          <a href="#" onClick={props.handleMealTime}>BREAKFAST</a>
          <a href="#" onClick={props.handleMealTime}>LUNCH</a>
          <a href="#" onClick={props.handleMealTime}>DINNER</a>
        </div>
      </div><br/>
      <p>{props.currentDate._d.constructor()}</p><br/>
      <p>Selected Date: {props.selectedDate}</p>
      <p>Selected Meal Time: {props.selectedMealTime}</p>
    </div>
  )
}

export default AddToPlanner
