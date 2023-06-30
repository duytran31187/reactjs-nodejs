import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "../MealForm/MealItemForm";
import CartContext from "../../../store/cart-context";

class MealItem extends React.Component {
    constructor(props) {
        super(props);
        // this.addItemToCardHandler.bind(this);
    }

    addItemToCardHandler = (amount) => {
        this.context.addItem({
            id: this.props.id,
            name: this.props.name,
            amount: amount,
            price: this.props.price
        });
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
MealItem.contextType = CartContext;
// const MealItemFunc = props => {
//     const formattedPRice = `$${props.price.toFixed(2)}`; // first $ is dollar
//     const cartCtx = useContext(CartContext);
//     const addItemToCardHandler = (amount) => {
//         cartCtx.addItem({
//             id: props.id,
//             name: props.name,
//             amount: amount,
//             price: props.price
//         });
//     };
//     return (
//         <li className={classes.meal}>
//             <div>
//                 <h3>{props.name}</h3>
//                 <div className={classes.description}>{props.description}</div>
//                 <div className={classes.price}>{formattedPRice}</div>
//             </div>
//             <div>
//                 <MealItemForm id={props.id} addItemToCard = {addItemToCardHandler}/>
//             </div>
//         </li>
//     );
// };
export default MealItem;