import React from 'react'
import './Listitems.css';
const Listitems = (props) => {

    return (
        <div class="List">
            <table>
                <thead>
                    <tr>
                        <th>Items</th>
                        <th>Quantity</th>
                    </tr>
                </thead>

                <tbody>
                    {props.localArray.map(item => (
                        <tr>
                            <td><span>{item.itemName}</span></td>
                            <td><span>{item.quantity}</span></td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <a href="./Cart.js"><input type="button" value="Pay now"></input></a>
        </div>
    )
}
export default Listitems
