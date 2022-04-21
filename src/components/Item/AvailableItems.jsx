import classes from './AvailableItems.module.css';

const SEED_ITEMS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
];

const AvailableItems = () => {
    const itemsList = SEED_ITEMS.map(item => <li>{item.name}</li>);

    return (
        <section className={classes.items}>
            <ul>
                {itemsList}
            </ul>
        </section>
    );
};

export default AvailableItems;