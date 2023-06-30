/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react'
import classes from './Cart.module.css'
import Modal from '../Layout/UI/Modal/Modal'
import CartContext from '../../store/cart-context'
import CartItem from './CartItem'
import Checkout from './Checkout'

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
    console.log(`111carItemAddHandler ${JSON.stringify(item)}`)
    const addedItem = {
      ...item,
      amount: 1
    }
    console.log(`222222222carItemAddHandler ${JSON.stringify(addedItem)}`)
    this.context.addItem(addedItem)
  }

  carItemRemoveHandler = (id) => {
    this.context.removeItem(id)
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
    const items = this.context.items
    const totalAmount = `$${this.context.totalAmount.toFixed(2)}`
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
// The contextType property on a class can be assigned a Context object created by React.createContext(). Using this property lets you consume the nearest current value of that Context type using this.context. You can reference this in any of the lifecycle methods including the render function.
Cart.contextType = CartContext;



// const Cart = props => {
//   const [isCheckout, setIsCheckout] = useState(false)
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [didSubmit, setDidSubmit] = useState(false)

//   const cartCtx = useContext(CartContext)
//   const items = cartCtx.items
//   const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
//   const hasItems = items.length > 0
  
//   const carItemAddHandler = (item) => {
//     const addedItem = {
//       ...item,
//       amount: 1
//     }
//     cartCtx.addItem(addedItem)
//   }
  // const carItemRemoveHandler = (id) => {
  //   cartCtx.removeItem(id)
  // }

//   const orderHandler = () => { // show checkout form
//     setIsCheckout(true)
//   }

//   const submitOrderHandler = async (userData) => { // submit order
//     setIsSubmitting(true)
//     await fetch('https://food-app-react-97e2c-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json', {
//       method: 'POST',
//       body: JSON.stringify({
//         user: userData,
//         orderedItems: cartCtx.items
//       })
//     })
//     setIsSubmitting(false)
//     setDidSubmit(true)
//     cartCtx.clearCart()
//   }

//   const cartItems = <ul className={classes['cart-items']}>{items.map(item => {
//     return (
//             <CartItem key={item.id} name={item.name} price={item.price} amount ={item.amount}
//             onAdd = {carItemAddHandler.bind(null, item)}
//             onRemove={carItemRemoveHandler.bind(null, item.id)}
//             />
//     )
//   })}</ul>

//   // contents
//   const modalActions = ( // default actions
//         <div className={classes.actions}>
//           <button className={classes['button--alt']} onClick={props.onClose}>
//             Close
//           </button>
//           {hasItems && (
//             <button className={classes.button} onClick={orderHandler}>
//               Order
//             </button>
//           )}
//         </div>
//   )

//   const cartModalContent = ( // default content
//         <React.Fragment>
//           {cartItems}
//           <div className={classes.total}>
//             <span>Total Amount</span>
//             <span>{totalAmount}</span>
//           </div>
//           {isCheckout && (
//             <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />
//           )}
//           {!isCheckout && modalActions}
//         </React.Fragment>
//   )

//   const isSubmittingModalContent = <p>Sending order data...</p>

//   const didSubmitModalContent = ( // after confirm clicked
//       <React.Fragment>
//         <p>Successfully sent the order!</p>
//         <div className={classes.actions}>
//         <button className={classes.button} onClick={props.onClose}>
//           Close
//         </button>
//       </div>
//       </React.Fragment>
//   )

//   return (
//         // eslint-disable-next-line react/prop-types
//         <Modal onClose={props.onClose}>
//             {!isSubmitting && !didSubmit && cartModalContent}
//             {isSubmitting && isSubmittingModalContent}
//             {!isSubmitting && didSubmit && didSubmitModalContent}
//         </Modal>
//   )
// }
export default Cart
