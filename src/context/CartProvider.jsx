import { useReducer } from 'react';

import CartContext from './cart-context';

const initialCartState = {
    items: [],
    totalAmount: 0,
};

const cartReducer = (state, action) => {
    if (action.type === 'ADD_ITEM') {
        const updatedTotalAmount =
            state.totalAmount + action.item.price * action.item.amount;
        const cartItemIndex = state.items.findIndex(
            item => item.id === action.item.id
        );
        let updatedItems;

        if (cartItemIndex === -1) {
            // use .concat() instead of .push() because https://reactjs.org/docs/state-and-lifecycle.html#do-not-modify-state-directly
            updatedItems = state.items.concat(action.item);
        } else {
            // Spread existing cart item and overwrite amount
            const updatedCartItem = {
                ...state.items[cartItemIndex],
                amount: state.items[cartItemIndex].amount + action.item.amount,
            };

            // Copy over cart items and update existing item
            updatedItems = [...state.items];
            updatedItems[cartItemIndex] = updatedCartItem;
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }

    if (action.type === 'REMOVE_ITEM') {
        const cartItemIndex = state.items.findIndex(
            item => item.id === action.id
        );
        const existingCartItem = state.items[cartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingCartItem.price;
        let updatedItems;

        if (existingCartItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id);
        } else {
            const updatedCartItem = {
                ...existingCartItem,
                amount: existingCartItem.amount - 1,
            };

            updatedItems = [...state.items];
            updatedItems[cartItemIndex] = updatedCartItem;
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }

    if (action.type === 'CLEAR_CART') {
        return initialCartState;
    }

    return initialCartState;
};

const CartProvider = props => {
    const [cartState, dispatchCartAction] = useReducer(
        cartReducer,
        initialCartState
    );

    // item: {name, amount, price}
    const addItemHandler = item => {
        dispatchCartAction({ type: 'ADD_ITEM', item });
    };

    const removeItemHandler = id => {
        dispatchCartAction({ type: 'REMOVE_ITEM', id });
    };

    const clearCartHandler = () => {
        dispatchCartAction({ type: 'CLEAR_CART' });
    };

    const cartContext = {
        // item = {id, name, amount, price}
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
        clearCart: clearCartHandler,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;
