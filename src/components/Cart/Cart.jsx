import { useContext, useState } from 'react';

import CartContext from '../../context/cart-context';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import Checkout from './Checkout';
import classes from './Cart.module.css';

const Cart = props => {
    const cartCtx = useContext(CartContext);
    const [isCheckout, setIsCheckout] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [hasSubmitted, setHasSubmitted] = useState(false);

    const totalAmount = `$${Math.abs(cartCtx.totalAmount.toFixed(2))}`;
    const hasItems = cartCtx.items.length > 0;

    const addItemHandler = item => {
        cartCtx.addItem({
            ...item,
            amount: 1,
        });
    };

    const removeItemHandler = id => {
        cartCtx.removeItem(id);
    };

    const showCheckoutHandler = () => {
        setIsCheckout(prevState => !prevState);
    };

    // Processing of checkout to Firebase
    const submitCheckoutHandler = async userData => {
        setIsSubmitting(true);
        await fetch(
            'https://react-reactcha-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json',
            {
                method: 'POST',
                body: JSON.stringify({
                    user: userData,
                    itemOrder: cartCtx.items,
                }),
            }
        );
        setIsSubmitting(false);
        setHasSubmitted(true);
        cartCtx.clearCart();
    };

    const cartItemList = (
        <ul className={classes['cart-items']}>
            {cartCtx.items.map(item => (
                <CartItem
                    key={item.id}
                    cartItem={item}
                    onAddItem={addItemHandler.bind(null, item)}
                    onRemoveItem={removeItemHandler.bind(null, item.id)}
                />
            ))}
        </ul>
    );

    const modalActions = (
        <div className={classes.actions}>
            <button
                className={classes['button--alt']}
                onClick={props.onShowCartChange}>
                Close
            </button>
            {hasItems && (
                <button
                    className={classes.button}
                    onClick={showCheckoutHandler}>
                    Order
                </button>
            )}
        </div>
    );

    const cartContent = (
        <>
            {cartItemList}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            {isCheckout && (
                <Checkout
                    onShowCheckoutChange={showCheckoutHandler}
                    onSubmitCheckout={submitCheckoutHandler}
                />
            )}
            {!isCheckout && modalActions}
        </>
    );

    const cartSubmittingContent = <p>Submitting order...</p>;

    const cartSubmittedContent = (
        <>
            <p>Order submitted!</p>
            <div className={classes.actions}>
                <button
                    className={classes['button']}
                    onClick={props.onShowCartChange}>
                    Close
                </button>
            </div>
        </>
    );

    return (
        <Modal onShowCartChange={props.onShowCartChange}>
            {!isSubmitting && !hasSubmitted && cartContent}
            {isSubmitting && cartSubmittingContent}
            {hasSubmitted && cartSubmittedContent}
        </Modal>
    );
};

export default Cart;
