import React from 'react';

import ItemsSummary from './ItemSummary';
import ItemsList from './ItemsList';

const Items = () => {
    return (
        <React.Fragment>
            <ItemsSummary />
            <ItemsList />
        </React.Fragment>
    );
};

export default Items;