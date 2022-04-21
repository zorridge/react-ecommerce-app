import { useContext } from 'react';

import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';

const Cart = props => {
    const cartCtx = useContext(CartContext);

    // const SEED_CART = [
    //     { id: 'c1', name: 'Tea', amount: 2, price: 4.99 }
    // ];

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const addItemHandler = item => {

    };

    const removeItemHandler = id => {

    };

    const cartItemList = <ul className={classes['cart-items']}>
        {cartCtx.items.map(item => (
            <CartItem
                key={item.id}
                cartItem={item}
                onAddItem={addItemHandler.bind(null, item)}
                onRemoveItem={removeItemHandler.bind(null, item.id)} />
        ))}
    </ul>;

    return (
        <Modal onShowCartChange={props.onShowCartChange}>
            {cartItemList}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onShowCartChange}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    );
};

export default Cart;