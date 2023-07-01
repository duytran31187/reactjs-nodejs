/* eslint-disable react/prop-types */
import React from 'react'
import classes from './Cart.module.css'
import Modal from '../Layout/UI/Modal/Modal'
import CartItem from './CartItem'
import Checkout from './Checkout'
import { connect } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../../redux/actions/cart"

class Cart extends React.Component {
  // static cartCtx = CartContext
  constructor(props) {
    super(props);
    this.state = {
      isCheckout: false,
      isSubmitting: false,
      didSubmit: false,
    };
    // this.carItemAddHandler.bind(this);
    // this.carItemRemoveHandler.bind(this);
  }


  carItemAddHandler = (item) => {
    const addedItem = {
      ...item,
      amount: 1
    }
    console.log(`carItemAddHandler ${JSON.stringify(item)}`)
    this.props.addItemToCart({item: addedItem});
  }

  carItemRemoveHandler = (id) => {
    console.log(`carItemRemoveHandler ${JSON.stringify(id)}`)
    this.props.removeItemFromCart({id: id});
  }
  
  // show checkout form
  showCheckoutHandler = () => {
    this.setState({ isCheckout: true })
  }

  // hide checkout form
  hideCheckoutHandler = () => {
    this.setState({ isCheckout: false })
  }


  orderHandler = () => { // show checkout form
    this.setState({ isCheckout: true });  
  }

  submitOrderHandler = async (userData) => { // submit order
    this.setState({ isSubmitting: true })
    await fetch('https://food-app-react-97e2c-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json', {
      method: 'POST',
      body: JSON.stringify({
        user: userData,
        orderedItems: this.context.items
      })
    })
    this.setState({ isSubmitting: false});
    this.setState({ didSubmit: true })
    this.context.clearCart()
  }

  render() {
    console.log(`redux cart ${JSON.stringify(this.props.cart)}`);
    const items = this.props.cart.items;
    const totalAmount = `$${this.props.cart.totalAmount.toFixed(2)}`
    const hasItems = items.length > 0

    const cartItems = <ul className={classes['cart-items']}>{items.map(item => {
      return (
              <CartItem key={item.id} name={item.name} price={item.price} amount ={item.amount}
              onAdd = {this.carItemAddHandler.bind(this, item)}
              onRemove={this.carItemRemoveHandler.bind(this, item.id)}
              />
      )
    })}</ul>
    // contents
    const modalActions = ( // default actions
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={this.props.onClose}>
          Close
        </button>
        {hasItems && (
          <button className={classes.button} onClick={this.orderHandler}>
            Order
          </button>
        )}
      </div>
    )
    const cartModalContent = ( // default content
        <React.Fragment>
          {cartItems}
          <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
          </div>
          {this.stateisCheckout && (
            <Checkout onConfirm={this.submitOrderHandler} onCancel={this.props.onClose} />
          )}
          {!this.state.isCheckout && modalActions}
        </React.Fragment>
    )
    const isSubmittingModalContent = <p>Sending order data...</p>

    const didSubmitModalContent = ( // after confirm clicked
        <React.Fragment>
          <p>Successfully sent the order!</p>
          <div className={classes.actions}>
          <button className={classes.button} onClick={this.props.onClose}>
            Close
          </button>
        </div>
        </React.Fragment>
    )
    return (
          // eslint-disable-next-line react/prop-types
          <Modal onClose={this.props.onClose}>
              {!this.state.isSubmitting && !this.state.didSubmit && cartModalContent}
              {this.state.isSubmitting && isSubmittingModalContent}
              {!this.state.isSubmitting && this.state.didSubmit && didSubmitModalContent}
          </Modal>
    )
  }
}
const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

export default connect(mapStateToProps, { addItemToCart, removeItemFromCart })(Cart);
