import React, { useContext } from 'react'
import classes from './HeaderCardButton.module.css'
import CartIcon from './CartIcon'
import CartContext from '../../store/cart-context'
import useIsHighlight from '../../hooks/use-higlight'

// class HeaderCardButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isHighlight: false,
//     }
//   }
//   useIsHighlight = (items) => {
//     console.log(`HeaderCardButton useIsHighlight ${JSON.stringify(items)}`);
//     if (items.length === 0) {
//         return;
//     }

//     // this.setState({isHighlight : true});
//     this.hightlightTimer = setTimeout(() => {
//         this.setState({isHighlight : false});
//     }, 300);
    
//     return true;
//   };
//   componentDidUpdate(prevProps, prevState ) {
//     console.log(`HeaderCardButton componentDidUpdate ${JSON.stringify(this.context.items)}`);
//     // if (prevState.isHighlight !== this.state.isHighlight) {
//       // this.useIsHighlight(this.context.items);
//     // }
//   }
//   componentWillUnmount() {
//     console.log(`HeaderCardButton componentWillUnmount`);
//     clearTimeout(this.hightlightTimer);
//   }
//   render() {

//     const numberOfCartItems = this.context.items.reduce((curNumber, item) => {
//       return curNumber + item.amount
//     }, 0)

//     // const isHighlight = this.useIsHighlight(this.context.items);

//     // const btnClasses = `${classes.button} ${isHighlight ? classes.bump : ''}`
//     return (
//         <button className={this.state.btnClasses}>
//             <span className={classes.icon} onClick={this.props.onShowCart}>
//                 <CartIcon />
//             </span>
//             <span>
//                 Cart
//             </span>
//             <span className={classes.badge}>
//                 {numberOfCartItems}
//             </span>
//         </button>
//     )
//   }
// }
// HeaderCardButton.contextType = CartContext;

const HeaderCardButton = props => {
  const cartCtx = useContext(CartContext)

  const { items } = cartCtx

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount
  }, 0)

  const isHighlight = useIsHighlight(cartCtx.items)
  const btnClasses = `${classes.button} ${isHighlight ? classes.bump : ''}`

  return (
        <button className={btnClasses}>
            <span className={classes.icon} onClick={props.onShowCart}>
                <CartIcon />
            </span>
            <span>
                Cart
            </span>
            <span className={classes.badge}>
                {numberOfCartItems}
            </span>
        </button>
  )
}

export default HeaderCardButton
