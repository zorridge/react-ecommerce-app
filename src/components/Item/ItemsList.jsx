import Card from '../UI/Card';
import ProductItem from './ProductItem/ProductItem';
import classes from './ItemsList.module.css';

const SEED_ITEMS = [
    {
        id: 'id1',
        name: 'Matcha (20g)',
        description: 'What you\'re here for.',
        price: 22.99,
    },
    {
        id: 'id2',
        name: 'Schnitzel',
        description: 'A german specialty! It\'s my shop, I sell what I want.',
        price: 16.5,
    },
    {
        id: 'id3',
        name: 'Matcha Whisk',
        description: 'Do it the proper way.',
        price: 12.99,
    },
    {
        id: 'id4',
        name: 'A Really Nice Japanese Cup',
        description: 'When in Rome...',
        price: 258.99,
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