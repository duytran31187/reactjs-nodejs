import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "../MealForm/MealItemForm";
import { connect } from "react-redux";
import {addItemToCart} from "../../../redux/actions/cart";

class MealItem extends React.Component {
    addItemToCardHandler = (amount) => {
        this.props.addItemToCart({item: {
            id: this.props.id,
            name: this.props.name,
            amount: amount,
            price: this.props.price
        }});
    };
    render() {
        const formattedPRice = `$${this.props.price.toFixed(2)}`; // first $ is dollar
    
        return (
            <li className={classes.meal}>
                <div>
                    <h3>{this.props.name}</h3>
                    <div className={classes.description}>{this.props.description}</div>
                    <div className={classes.price}>{formattedPRice}</div>
                </div>
                <div>
                    <MealItemForm id={this.props.id} addItemToCard = {this.addItemToCardHandler}/>
                </div>
            </li>
        );
    }
}
export default connect(null, { addItemToCart })(MealItem);