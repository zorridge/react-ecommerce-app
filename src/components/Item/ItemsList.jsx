import Card from '../UI/Card';
import ProductItem from './ProductItem/ProductItem';
import classes from './ItemsList.module.css';

const SEED_ITEMS = [
    {
        id: 'id1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'id2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
    },
    {
        id: 'id3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 'id4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
];

const ItemsList = () => {
    const itemsList = SEED_ITEMS.map(item =>
        <ProductItem key={item.id} product={item} />
    );

    return (
        <section className={classes.items}>
            <Card>
                <ul>
                    {itemsList}
                </ul>
            </Card>
        </section>
    );
};

export default ItemsList;