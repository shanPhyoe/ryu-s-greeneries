import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import shopReducer from './shop/shop.reducer';
import userReducer from './user/user.reducer';
import signInSignUpReducer from './sign-in-sign-up/sign-in-sign-up.reducer';
import cartReducer from './cart/cart.reducer';
import popupReducer from './popup/popup.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user', 'shop'],
};

const rootReducer = combineReducers({
    signinsignup: signInSignUpReducer,
    user: userReducer,
    shop: shopReducer,
    cart: cartReducer,
    popup: popupReducer,
});

export default persistReducer(persistConfig, rootReducer);
