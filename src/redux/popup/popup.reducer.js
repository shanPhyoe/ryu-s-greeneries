import userActionTypes from '../user/user.types';
import cartActionTypes from '../cart/cart.types';
import popupActionTypes from './popup.types';

const INITIAL_STATE = {
    popupText: '',
};

const popupReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case userActionTypes.SIGN_UP_SUCCESS:
            return {
                popupText: 'Signed up successfully!',
            };
        case userActionTypes.SIGN_UP_FAILURE:
            return {
                popupText: action.payload,
            };
        case userActionTypes.SIGN_IN_SUCCESS:
            return {
                popupText: 'Signed in',
            };
        case userActionTypes.SIGN_IN_FAILURE:
            return {
                popupText: action.payload,
            };
        case userActionTypes.SIGN_OUT_SUCCESS:
            return {
                popupText: 'Signed out',
            };
        case userActionTypes.SIGN_OUT_FAILURE:
            return {
                popupText: action.payload,
            };
        case cartActionTypes.FETCH_CART_SUCCESS:
            return {
                popupText: 'Previous cart items has been loaded',
            };
        case cartActionTypes.ADD_ITEM_TO_CART:
            return {
                popupText: 'Product has been added to your cart',
            };
        case popupActionTypes.CLEAR_POPUP_TEXT:
            return {
                popupText: '',
            };
        default:
            return {
                ...state,
            };
    }
};

export default popupReducer;
