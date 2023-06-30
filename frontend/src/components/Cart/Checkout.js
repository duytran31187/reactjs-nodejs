/* eslint-disable react/prop-types */
import React from 'react'
import classes from './Checkout.module.css'
import useInput from '../../hooks/use-input'

const isNotEmpty = (value) => value.trim() !== ''
const isFiveChars = (value) => value.trim().length === 5

const Checkout = props => {
  const {
    value: enteredName,
    hasError: nameInputIsInvalid,
    valueChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameInputBlurHandler
  } = useInput(isNotEmpty)

  const {
    value: enteredStreet,
    hasError: streetInputIsInvalid,
    valueChangeHandler: streetInputChangeHandler,
    inputBlurHandler: streetInputBlurHandler
  } = useInput(isNotEmpty)

  const {
    value: enteredCity,
    hasError: cityInputIsInvalid,
    valueChangeHandler: cityInputChangeHandler,
    inputBlurHandler: cityInputBlurHandler
  } = useInput(isNotEmpty)

  const {
    value: enteredPostalCode,
    hasError: postalCodeInputIsInvalid,
    valueChangeHandler: postalCodeInputChangeHandler,
    inputBlurHandler: postalCodeInputBlurHandler
  } = useInput(isFiveChars)

  const nameControlClasses = `${classes.control} ${
        nameInputIsInvalid ? classes.invalid : ''
      }`

  const streetControlClasses = `${classes.control} ${
        streetInputIsInvalid ? classes.invalid : ''
      }`

  const cityControlClasses = `${classes.control} ${
        cityInputIsInvalid ? classes.invalid : ''
      }`
  const postalCodeControlClasses = `${classes.control} ${
        postalCodeInputIsInvalid ? classes.invalid : ''
      }`

  const confirmHandler = (event) => {
    event.preventDefault()

    const formIsValid = !nameInputIsInvalid && !streetInputIsInvalid && !cityInputIsInvalid && !postalCodeInputIsInvalid

    if (!formIsValid) {
      return
    }

    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postalCode: enteredPostalCode
    })
  }

  return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={nameControlClasses}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' value={enteredName}
                    onChange={nameInputChangeHandler}
                    onBlur={nameInputBlurHandler}
                />
                {nameInputIsInvalid && <p>Please enter a valid name!</p>}
            </div>
            <div className={streetControlClasses}>
                <label htmlFor='street'>Street</label>
                <input type='text' id='street' value={enteredStreet}
                    onChange={streetInputChangeHandler}
                    onBlur={streetInputBlurHandler}
                 />
                {streetInputIsInvalid && <p>Please enter a valid street!</p>}
            </div>
            <div className={postalCodeControlClasses}>
                <label htmlFor='postal'>Postal Code</label>
                <input type='text' id='postal' value={enteredPostalCode}
                    onChange={postalCodeInputChangeHandler}
                    onBlur={postalCodeInputBlurHandler}
                />
                {postalCodeInputIsInvalid && (
                <p>Please enter a valid postal code (5 characters long)!</p>
                )}
            </div>
            <div className={cityControlClasses}>
                <label htmlFor='city'>City</label>
                <input type='text' id='city' value={enteredCity}
                    onChange={cityInputChangeHandler}
                    onBlur={cityInputBlurHandler}
                />
                {cityInputIsInvalid && <p>Please enter a valid city!</p>}
            </div>
            <div className={classes.actions}>
                <button type='button' onClick={props.onCancel}>
                Cancel
                </button>
                <button className={classes.submit}>Confirm</button>
            </div>
        </form>
  )
}
export default Checkout
