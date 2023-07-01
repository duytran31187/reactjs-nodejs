import React from 'react'
import classes from './HeaderCardButton.module.css'
import CartIcon from './CartIcon'
import { connect } from "react-redux";
import {mapStateToProps} from "../../redux/selectors"
class HeaderCardButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHighlight: false,
    }
  }
  useIsHighlight = (items) => {
    console.log(`HeaderCardButton useIsHighlight ${JSON.stringify(items)}`);
    if (items.length === 0) {
        return;
    }

    // this.setState({isHighlight : true});
    this.hightlightTimer = setTimeout(() => {
        this.setState({isHighlight : false});
    }, 300);
    
    return true;
  };
  componentDidUpdate(prevProps, prevState ) {
    console.log(`HeaderCardButton componentDidUpdate ${JSON.stringify(this.context.items)}`);
    // if (prevState.isHighlight !== this.state.isHighlight) {
      // this.useIsHighlight(this.context.items);
    // }
  }
  componentWillUnmount() {
    console.log(`HeaderCardButton componentWillUnmount`);
    clearTimeout(this.hightlightTimer);
  }
  render() {

    const numberOfCartItems = this.props.cart.items.reduce((curNumber, item) => {
      return curNumber + item.amount
    }, 0)

    // const isHighlight = this.useIsHighlight(this.context.items);

    // const btnClasses = `${classes.button} ${isHighlight ? classes.bump : ''}`
    const btnClasses = `${classes.button}`;
    return (
        <button className={btnClasses}>
            <span className={classes.icon} onClick={this.props.onShowCart}>
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
}

export default connect(mapStateToProps)(HeaderCardButton);
