import React from "react";

import classes from "./Input.module.css";

const Input = (props) => {
    return (
        <div className={classes.input}>
            <label htmlFor={props.id}>{props.label}</label>
            <input {...props.input} onChange={props.amountChange} />
        </div>
    );
};

// const Input = React.forwardRef((props, ref) => {
//     return (
//         <div className={classes.input}>
//             <label htmlFor={props.id}>{props.label}</label>
//             <input ref={ref} {...props.input}/>
//         </div>
//     );
// });


export default Input;