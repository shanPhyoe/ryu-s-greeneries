import cartActionTypes from './cart.types';

export const fetchCartSuccess = cartItems => ({
    type: cartActionTypes.FETCH_CART_SUCCESS,
    payload: cartItems,
});

export const fetchCartFailure = error => ({
    type: cartActionTypes.FETCH_CART_FAILURE,
    payload: error,
});

export const addItemToCart = item => ({
    type: cartActionTypes.ADD_ITEM_TO_CART,
    payload: item,
});

export const reduceItemFromCart = item => ({
    type: cartActionTypes.REDUCE_ITEM_FROM_CART,
    payload: item,
});

export const removeItemFromCart = item => ({
    type: cartActionTypes.REMOVE_ITEM_FROM_CART,
    payload: item,
});

export const clearCart = () => ({
    type: cartActionTypes.CLEAR_CART,
});

export const toggleCartDropdown = () => ({
    type: cartActionTypes.TOGGLE_CART_DROPDOWN,
});

export const hideCartDropdown = () => ({
    type: cartActionTypes.HIDE_CART_DROPDOWN,
});
