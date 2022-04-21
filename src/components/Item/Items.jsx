import React from 'react';

import ItemsSummary from './ItemSummary';
import AvailableItems from './AvailableItems';

const Items = () => {
    return (
        <React.Fragment>
            <ItemsSummary />
            <AvailableItems />
        </React.Fragment>
    );
};

export default Items;