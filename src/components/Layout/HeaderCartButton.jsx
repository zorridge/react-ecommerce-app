import React, { useContext, useEffect, useState } from 'react';

import CartContext from '../../context/cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = props => {
    const [buttonIsAnimated, setButtonIsAnimated] = useState(false);

    const cartCxt = useContext(CartContext);

    const numCartItems = cartCxt.items.reduce((prevNum, item) => {
        return prevNum + item.amount;
    }, 0);

    const btnClassNames = `${classes.button} ${
        buttonIsAnimated ? classes.bump : ''
    }`;

    useEffect(() => {
        if (cartCxt.items.length === 0) {
            return;
        }

        setButtonIsAnimated(true);

        const bumpTimer = setTimeout(() => {
            setButtonIsAnimated(false);
        }, 300);

        return () => {
            clearTimeout(bumpTimer);
        };
    }, [cartCxt.items]);

    return (
        <button className={btnClassNames} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numCartItems}</span>
        </button>
    );
};

export default HeaderCartButton;
