import ProductItemForm from './ProductItemForm';
import classes from './ProductItem.module.css';

const ProductItem = props => {
    const { id, name, description } = props.product;
    const price = `$${props.product.price.toFixed(2)}`;

    return (
        <li className={classes.product}>
            <div>
                <h3>{name}</h3>
                <div className={classes.description}>{description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div className={classes.form}>
                <ProductItemForm id={id} />
            </div>
        </li >
    );
};

export default ProductItem;

