import { takeLatest, put, all, call } from 'redux-saga/effects';

import cartActionTypes from './cart.types';
import userActionTypes from '../user/user.types';

import { fetchCartSuccess, fetchCartFailure } from './cart.action';

// this saga takes all the cartItems of specific user who is signed in
export function* fetchCartStart({ payload: { cartItems } }) {
    try {
        yield put(fetchCartSuccess(cartItems));
    } catch (error) {
        yield put(fetchCartFailure(error.message));
    }
}
export function* onSignInSuccess() {
    yield takeLatest(userActionTypes.SIGN_IN_SUCCESS, fetchCartStart);
}

export function* cartSagas() {
    yield all([call(onSignInSuccess)]);
}
