import React from 'react'
const Showcart = (props) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Item Id</th>
            <th>Item Name</th>
          </tr>
        </thead>
        <tbody>
          {props.itemsArray.map(itemObject => (
            <tr>
              <td>{itemObject.itemId}</td>
              <td>{itemObject.itemName}</td>
              <td>
                <input type='button' value='-' onClick={props.changeQuantity.bind(null, itemObject.itemId, '-')} />
                <input type='button' value={itemObject.quantity} />
                <input type='button' value='+' onClick={props.changeQuantity.bind(null, itemObject.itemId, '+')} />
                <input type='button' value='Add' onClick={props.addToCarts} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Showcart
