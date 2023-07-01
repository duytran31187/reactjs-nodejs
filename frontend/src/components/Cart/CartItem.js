/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import classes from './CartItem.module.css'
import React from 'react'

class CartItem extends React.Component {
  render() {
    const price = `$${this.props.price.toFixed(2)}`

    return (
      <li className={classes['cart-item']}>
        <div>
          <h2>{this.props.name}</h2>
          <div className={classes.summary}>
            <span className={classes.price}>{price}</span>
            <span className={classes.amount}>x {this.props.amount}</span>
          </div>
        </div>
        <div className={classes.actions}>
          <button onClick={this.props.onRemove}>−</button>
          <button onClick={this.props.onAdd}>+</button>
        </div>
      </li>
    )
  }
}
export default CartItem;
