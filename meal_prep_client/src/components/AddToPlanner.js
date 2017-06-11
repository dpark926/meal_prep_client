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
          <a href="#">BREAKFAST</a>
          <a href="#">LUNCH</a>
          <a href="#">DINNER</a>
        </div>
      </div><br/>
      {props.currentDate._d.constructor()}
      {props.selectedDate}
    </div>
  )
}

export default AddToPlanner
