import {useState } from "react";

// custom hook: simply understand: just group duplicated functions into one
// with this one: the validate function, changeHandler, blurHandler will be duplicated with many fields.
const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && isTouched;

    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value);
    
    }
    const inputBlurHandler = (event) => {
        setIsTouched(true);
    }
    console.log(JSON.stringify({
        value: enteredValue,
        hasError,
        valueChangeHandler,
        inputBlurHandler
    }));
    return {
        value: enteredValue,
        hasError,
        valueChangeHandler,
        inputBlurHandler
    };
}

export default useInput;