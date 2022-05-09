import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import signInSignUpReducer from './sign-in-sign-up/sign-in-sign-up.reducer';
import userReducer from './user/user.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user'],
};

const rootReducer = combineReducers({
    signinsignup: signInSignUpReducer,
    user: userReducer,
});

export default persistReducer(persistConfig, rootReducer);
