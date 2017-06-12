import React from 'react'

function GroceryList(props) {
  if (props.shoppingListState) {
    return (
      <div className='grocery'>
        <button onClick={props.shoppingListHandle}>Hide List</button>
        <div className='grocery-list'>
          <h1>GROCERY LIST</h1>
          <table className='grocery-table'>
            <tr>
              <td><div>1</div></td>
              <td><div>oz</div></td>
              <td><div>Item</div></td>
            </tr>
            <tr>
              <td><div>1</div></td>
              <td><div>oz</div></td>
              <td><div>Item</div></td>
            </tr>
            <tr>
              <td><div>1</div></td>
              <td><div>oz</div></td>
              <td><div>Item</div></td>
            </tr>
          </table>
        </div>
      </div>
    )
  } else {
    return (
      <div className='grocery'>
        <button onClick={props.shoppingListHandle}>Show List</button>
      </div>
    )
  }

}

export default GroceryList
