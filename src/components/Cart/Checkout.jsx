import React from 'react';
import { useRef } from 'react';

import classes from './Checkout.module.css';

const Checkout = props => {
    const nameInputRef = useRef();
    const addressInputRef = useRef();
    const remarksInputRef = useRef();

    const confirmCheckoutHandler = e => {
        e.preventDefault();

        const nameInput = nameInputRef.current.value;
        const addressInput = addressInputRef.current.value;
        const remarksInput = remarksInputRef.current.value;
    };

    return (
        <form className={classes.form} onSubmit={confirmCheckoutHandler}>
            <div className={classes.wrapper}>
                <div className={classes.control}>
                    <label htmlFor='name'>Name</label>
                    <input type='text' id='name' ref={nameInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='address'>Address</label>
                    <input type='text' id='address' ref={addressInputRef} />
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
                <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    );
};

export default Checkout;
