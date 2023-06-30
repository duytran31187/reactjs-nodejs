import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "../MealForm/MealItemForm";
import CartContext from "../../../store/cart-context";

const MealItem = props => {
    const formattedPRice = `$${props.price.toFixed(2)}`; // first $ is dollar
    const cartCtx = useContext(CartContext);
    const addItemToCardHandler = (amount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
    };
    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{formattedPRice}</div>
            </div>
            <div>
                <MealItemForm id={props.id} addItemToCard = {addItemToCardHandler}/>
            </div>
        </li>
    );
};
export default MealItem;