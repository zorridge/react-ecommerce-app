import classes from './CartItem.module.css';

const CartItem = props => {
  const { name, amount } = props.cartItem;
  const price = `$${props.cartItem.price.toFixed(2)}`;

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemoveItem}>-</button>
        <button onClick={props.onAddItem}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
