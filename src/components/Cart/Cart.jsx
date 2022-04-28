import { useContext, useState } from 'react';

import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import Checkout from './Checkout';
import classes from './Cart.module.css';

const Cart = props => {
    const cartCtx = useContext(CartContext);
    const [isCheckout, setIsCheckout] = useState(false);

    // const SEED_CART = [
    //     { id: 'c1', name: 'Tea', amount: 2, price: 4.99 }
    // ];

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

    return (
        <Modal onShowCartChange={props.onShowCartChange}>
            {cartItemList}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            {isCheckout && (
                <Checkout onShowCheckoutChange={showCheckoutHandler} />
            )}
            {!isCheckout && modalActions}
        </Modal>
    );
};

export default Cart;
