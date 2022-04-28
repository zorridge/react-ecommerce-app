import { useContext } from 'react';

import CartContext from '../../../context/cart-context';
import ProductItemForm from './ProductItemForm';
import classes from './ProductItem.module.css';

const ProductItem = props => {
    const cartCtx = useContext(CartContext);

    const { id, name, description } = props.product;
    const price = `$${props.product.price.toFixed(2)}`;

    const addToCartHandler = num => {
        cartCtx.addItem({
            id: id,
            name: name,
            amount: num,
            price: props.product.price,
        });
    };

    return (
        <li className={classes.product}>
            <div>
                <h3>{name}</h3>
                <div className={classes.description}>{description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div className={classes.form}>
                <ProductItemForm id={id} onAddToCart={addToCartHandler} />
            </div>
        </li>
    );
};

export default ProductItem;
