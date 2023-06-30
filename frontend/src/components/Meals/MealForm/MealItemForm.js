import React, { useRef, useState } from "react";
import Input from "../../Layout/UI/Input";
import classes from './MealItemForm.module.css';

class MealItemForm extends React.Component {
    constructor() {
        super();
        this.state = {
            isValid: true,
            // amount: 1
            form: {
                amount: 1
            }
        }
    }
    amountChangeHandle = (event) => {
        console.log(`amountChangeHandle`, event.target.value);
        this.setState({ 
            form: {
                ...this.state.form,
                amount: event.target.value
            }
        });
        
    }
    submitHandler = (event) => {
        event.preventDefault();
        const enteredAmount = this.state.form.amount;
        const enteredAmountNumber = +enteredAmount;
        if (enteredAmountNumber === 0) {
            this.setState({ isValid: false });
        } else {
            this.setState({ isValid: true });
            this.props.addItemToCard(enteredAmountNumber);
            this.setState({ 
            form: {
                ...this.state.form,
                amount: enteredAmountNumber
            }
        });
        }
    }

    render() {
        return (
            <form className={classes.form} onSubmit={this.submitHandler}>
                {/* <div>
                    <label htmlFor='amount'>Amount</label>
                    <input type='number' name='amount' value={this.state.form.amount} onChange={this.amountChangeHandle}/>
                </div> */}
                <Input label="Amount"
                    input={{
                        id:"amount_" + this.props.id,
                        type:"number",
                        name:"amount",
                        min: '0',
                        max: '5',
                        step: '1',
                        defaultValue: this.state.form.amount
                    }}
                    amountChange={this.amountChangeHandle}
                />
                {!this.state.isValid && (<i>Invalid amount</i>)}
                <button>+ Add</button>
            </form>
        )
    }
}

// const MealItemForm = props => {
//     const amountRef = useRef();
//     const [isValid, setIsValid] = useState(true);
//     const submitHandler = (event) => {
//         event.preventDefault();
//         const enteredAmount = amountRef.current.value; //GET input value by ref
//         const enteredAmountNumber = +enteredAmount;
//         if (enteredAmountNumber === 0) {
//             setIsValid(false);
//         } else {
//             setIsValid(true);
//             props.addItemToCard(enteredAmountNumber);
//         }
//     };
//     return (
//         <form className={classes.form} onSubmit={submitHandler}>
//             <Input label="Amount"
//             ref = {amountRef}
//             input={{
//                 id:"amount_" + props.id,
//                 type:"number",
//                 name:"amount",
//                 min: '1',
//                 max: '5',
//                 step: '1',
//                 defaultValue: '1'
//             }}/>
//             {!isValid && (<i>Invalid amount</i>)}
//             <button>+ Add</button>
//         </form>
//     )
// }

export default MealItemForm;