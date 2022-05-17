import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartDropdown = createSelector(
    selectCart,
    cart => cart.showCartDropdown
);

export const selectCartItems = createSelector(
    selectCart,
    cart => cart.cartItems
);

export const selectTotalItems = createSelector(selectCartItems, items =>
    items.length > 0
        ? items.reduce((itemsCount, item) => itemsCount + item.quantity, 0)
        : 0
);

export const selectTotalPrice = createSelector(selectCartItems, items =>
    items.reduce(
        (totalPrice, item) => totalPrice + +item.price * item.quantity,
        0
    )
);

export const selectTotalType = createSelector(
    selectCartItems,
    items => items.length
);
