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
