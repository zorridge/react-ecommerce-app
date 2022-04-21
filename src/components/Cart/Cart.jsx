import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = props => {
    const SEED_CART = [
        { id: 'c1', name: 'Tea', amount: 2, price: 4.99 }
    ];

    const cartItemList = <ul className={classes['cart-items']}>
        {SEED_CART.map(item => <li key={item.id}>{item.name}</li>)}
    </ul>;

    return (
        <Modal onShowCartChange={props.onShowCartChange}>
            {cartItemList}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>$9.89</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onShowCartChange}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    );
};

export default Cart;