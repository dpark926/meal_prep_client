import React from 'react'

function Planner(props) {


  if (props.toggleState) {
    return (
      <div className="planner">
        <button className="accordion" onClick={props.handleToggle}>Hide Calendar</button>
        <table>
          <tr className="table-categories">
            <th>MONDAY</th>
            <th>TUESDAY</th>
            <th>WEDNESDAY</th>
            <th>THURSDAY</th>
            <th>FRIDAY</th>
          </tr>
          <tr>
            <td><div>BREAKFAST</div></td>
            <td><div>BREAKFAST</div></td>
            <td><div>BREAKFAST</div></td>
            <td><div>BREAKFAST</div></td>
            <td><div>BREAKFAST</div></td>
          </tr>
          <tr>
            <td><div>LUNCH</div></td>
            <td><div>LUNCH</div></td>
            <td><div>LUNCH</div></td>
            <td><div>LUNCH</div></td>
            <td><div>LUNCH</div></td>
          </tr>
          <tr>
            <td><div>DINNER</div></td>
            <td><div>DINNER</div></td>
            <td><div>DINNER</div></td>
            <td><div>DINNER</div></td>
            <td><div>DINNER</div></td>
          </tr>
        </table>
      </div>
    )
  } else {
    return (
      <div className="planner">
        <button className="accordion" onClick={props.handleToggle}>Show Calendar</button>
      </div>
    )
  }


}

export default Planner
