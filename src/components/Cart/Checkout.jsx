import React, { useRef } from 'react';

import useInput from '../../hooks/use-input';
import classes from './Checkout.module.css';

const validateInput = inputValue => inputValue.trim() !== '';

const Checkout = props => {
    const remarksInputRef = useRef();

    const {
        value: inputName,
        isValid: inputNameIsValid,
        isError: inputNameIsError,
        valueChangeHandler: nameValueHandler,
        blurChangeHandler: nameBlurHandler,
        reset: resetInputName,
    } = useInput(validateInput);

    const {
        value: inputAddress,
        isValid: inputAddressIsValid,
        isError: inputAddressIsError,
        valueChangeHandler: addressValueHandler,
        blurChangeHandler: addressBlurHandler,
        reset: resetInputAddress,
    } = useInput(validateInput);

    // Overall form validation state (for enabling submission button)
    let formIsValid = false;
    if (inputNameIsValid && inputAddressIsValid) {
        formIsValid = true;
    }

    // Actual processing of checkout passed to Cart component for execution
    const confirmCheckoutHandler = e => {
        e.preventDefault();

        props.onSubmitCheckout({
            name: inputName,
            address: inputAddress,
            remarks: remarksInputRef.current.value,
        });

        resetInputName();
        resetInputAddress();
        remarksInputRef.current.value = '';
    };

    const submitButtonClasses = formIsValid ? classes.submit : classes.disabled;
    const nameControlClasses = !inputNameIsError
        ? classes.control
        : `${classes.control} ${classes.invalid}`;
    const addressControlClasses = !inputAddressIsError
        ? classes.control
        : `${classes.control} ${classes.invalid}`;

    return (
        <form className={classes.form} onSubmit={confirmCheckoutHandler}>
            <div className={classes.wrapper}>
                <div className={nameControlClasses}>
                    <label htmlFor='name'>Name</label>
                    <input
                        type='text'
                        id='name'
                        onChange={nameValueHandler}
                        onBlur={nameBlurHandler}
                        value={inputName}
                    />
                    {inputNameIsError && <p>Name must not be empty!</p>}
                </div>
                <div className={addressControlClasses}>
                    <label htmlFor='address'>Address</label>
                    <input
                        type='text'
                        id='address'
                        onChange={addressValueHandler}
                        onBlur={addressBlurHandler}
                        value={inputAddress}
                    />
                    {inputAddressIsError && <p>Address must not be empty!</p>}
                </div>
                <div className={classes.control}>
                    <label htmlFor='remarks'>Remarks</label>
                    <input type='text' id='remarks' ref={remarksInputRef} />
                </div>
            </div>
            <div className={classes.actions}>
                <button type='button' onClick={props.onShowCheckoutChange}>
                    Cancel
                </button>
                <button className={submitButtonClasses} disabled={!formIsValid}>
                    Confirm
                </button>
            </div>
        </form>
    );
};

export default Checkout;
