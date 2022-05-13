import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    selectCart,
    cart => cart.cartItems
);

export const selectTotalItems = createSelector(selectCartItems, items =>
    items.reduce((itemsCount, item) => itemsCount + item.quantity, 0)
);
