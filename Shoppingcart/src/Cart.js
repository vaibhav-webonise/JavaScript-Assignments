import React from 'react';
import Showcart from './Showcart';
import Listitems from './Listitems'
import { throwStatement } from '@babel/types';
export default class Cart extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [],
      isShow: false,
      localArray: [],
      itemCart: [],
      itemsArray: [{ itemId: 1, itemName: 'MI earphones ', quantity: 0 }, { itemId: 2, itemName: 'Fastrack watch', quantity: 0 },
      { itemId: 3, itemName: 'Louis vaten sunglasses', quantity: 0 }]
    }
    this.tempId = 0
  }

  changeQuantity = (id, sign) => {
    for (let i = 0; i < this.state.itemsArray.length; i++) {
      if (this.state.itemsArray[i].itemId === id) {
        this.setState({
          tempId: id
        })
        if (sign === '+') {
          this.state.itemsArray[i].quantity++
          this.setState({
            quantity: 0
          })
        } else if (sign === '-') {
          this.state.itemsArray[i].quantity--
          this.setState({
            quantity: 0
          })
        } else {
          return;
        }
      }
    }

    this.addToCarts = () => {

      for (let i = 0; i < this.state.itemsArray.length; i++) {

        if (this.state.itemsArray[i].itemId === this.state.tempId) {

          this.setState({
            itemCart: [...this.state.itemCart, { itemName: this.state.itemsArray[i].itemName, quantity: this.state.itemsArray[i].quantity }
            ]
          })
        }
      }

    }

    this.showcart = () => {
      if (this.state.itemCart.length === 0) {
        alert('No items are there in the cart..')
      }

      else {
        this.setState({
          isShow: true
        })
      }
    }

  }

  render() {
    if (!this.state.isShow) {
      return (
        <div >
          <input type="button" value='Show my cart' onClick={this.showcart}></input>
          <br />
          <Showcart itemsArray={this.state.itemsArray}
            quantity={this.quantity}

            changeQuantity={this.changeQuantity}
            addToCarts={this.addToCarts}
            data={this.state.data}
          />
          <br />
        </div>
      );

    }

    else {
      if (this.state.isShow === true) {
        localStorage.setItem('storageArray', JSON.stringify(this.state.itemCart));
        this.state.localArray = JSON.parse(localStorage.getItem('storageArray'));
        return (
          <div> <a href='Cart'>Home</a>
            <Listitems localArray={this.state.localArray}
              storageArray={this.state.storageArray} />
          </div>);
      }


    }

  }

}
