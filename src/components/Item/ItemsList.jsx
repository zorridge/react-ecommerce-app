import { useEffect, useState } from 'react';

import Card from '../UI/Card';
import ProductItem from './ProductItem/ProductItem';
import classes from './ItemsList.module.css';

const ItemsList = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                'https://react-reactcha-default-rtdb.asia-southeast1.firebasedatabase.app/products.json'
            );

            if (!response.ok) {
                throw new Error(
                    "Something went wrong... it's my fault, not yours!"
                );
            }

            const data = await response.json();

            const itemsData = [];
            for (const key in data) {
                itemsData.push({
                    id: key,
                    ...data[key],
                });
            }

            setItems(itemsData);
            setIsLoading(false);
        };

        fetchData().catch(error => {
            setIsLoading(false);
            setHttpError(error.message);
        });
    }, []);

    if (isLoading) {
        return (
            <section className={classes.loading}>
                <p>Loading data...</p>
            </section>
        );
    }

    if (httpError) {
        return (
            <section className={classes.loading}>
                <p>{httpError}</p>
            </section>
        );
    }

    const itemsList = items.map(item => (
        <ProductItem key={item.id} product={item} />
    ));

    return (
        <section className={classes.items}>
            <Card>
                <ul>{itemsList}</ul>
            </Card>
        </section>
    );
};

export default ItemsList;
