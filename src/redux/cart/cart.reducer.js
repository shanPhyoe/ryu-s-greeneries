import cartActionTypes from './cart.types';
import { addItemToCart } from './cart.util';

const INITIAL_STATE = {
    cartItems: [],
    errorMessage: '',
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionTypes.FETCH_CART_SUCCESS:
            return {
                ...state,
                cartItems: [...action.payload],
                errorMessage: null,
            };
        case cartActionTypes.FETCH_CART_FAILURE:
            return {
                ...state,
                errorMessage: action.payload,
            };
        case cartActionTypes.ADD_ITEM_TO_CART:
            return {
                ...state,
                cartItems: addItemToCart(action.payload, state.cartItems),
            };
        default:
            return {
                ...state,
            };
    }
};

export default cartReducer;
