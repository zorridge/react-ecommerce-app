import Input from '../../UI/Input';
import classes from './ProductItemForm.module.css';

const ProductItemForm = props => {
    return (
        <form className={classes.form}>
            <Input label='Amount:' input={{
                id: `amount-${props.id}`,
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                default: '1'
            }} />
            <button>+ Add</button>
        </form>
    );
};

export default ProductItemForm;