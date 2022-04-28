import { useRef, useState } from 'react';

import Input from '../../UI/Input';
import classes from './ProductItemForm.module.css';

const ProductItemForm = props => {
    const [inputIsValid, setInputIsValid] = useState(true);
    const amountInputRef = useRef();

    const submitHandler = e => {
        e.preventDefault();

        const inputAmt = amountInputRef.current.value;
        const inputAmtNum = +inputAmt;

        if (
            inputAmt.trim().length === 0 ||
            inputAmtNum < 1 ||
            inputAmtNum > 5
        ) {
            setInputIsValid(false);
            return;
        }

        props.onAddToCart(inputAmtNum);
        amountInputRef.current.value = null;
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                label='Amount:'
                ref={amountInputRef}
                input={{
                    id: `amount-${props.id}`,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    required: true,
                }}
            />
            <button>+ Add</button>
            {!inputIsValid && <p>Please enter a valid input (1-5).</p>}
        </form>
    );
};

export default ProductItemForm;
