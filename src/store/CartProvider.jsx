import { useReducer } from 'react';

import CartContext from './cart-context';

const initialCartState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            const updatedItems = state.items.concat(action.item); // use .concat() instead of .push() because https://reactjs.org/docs/state-and-lifecycle.html#do-not-modify-state-directly
            const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount
            };
        case 'REMOVE_ITEM':
            return;
        default:
            return initialCartState;
    }
};

const CartProvider = props => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, initialCartState);

    // item: {name, amount, price}
    const addItemHandler = item => {
        dispatchCartAction({ type: 'ADD_ITEM', item });
    };

    const removeItemHandler = id => {
        dispatchCartAction({ type: 'REMOVE_ITEM', id });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;