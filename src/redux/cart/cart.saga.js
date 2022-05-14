import { takeLatest, put, all, call, select } from 'redux-saga/effects';

import cartActionTypes from './cart.types';
import userActionTypes from '../user/user.types';
import { firestore } from '../../firebase/firebase.util';

import { fetchCartSuccess, fetchCartFailure, clearCart } from './cart.action';
import { selectCurrentUser } from '../user/user.selector';
import { selectCartItems } from './cart.selector';

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

// updating cartItems to userRef in database whenever cartItems change
export function* updateCartInFirestore() {
    const currentUser = yield select(selectCurrentUser);
    if (!currentUser) return;

    try {
        const userRef = yield firestore.doc(`users/${currentUser.id}`);
        const cartItems = yield select(selectCartItems);
        yield userRef.update({ cartItems });
    } catch (error) {
        alert(error.message);
    }
}
export function* onCartItemsChange() {
    yield takeLatest(
        [
            cartActionTypes.ADD_ITEM_TO_CART,
            cartActionTypes.REDUCE_ITEM_FROM_CART,
            cartActionTypes.REMOVE_ITEM_FROM_CART,
        ],
        updateCartInFirestore
    );
}

// clear cartItems in state when user sign out
export function* clearCartOnSignOut() {
    yield put(clearCart());
}
export function* onSignOutSuccess() {
    yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
    yield all([
        call(onSignInSuccess),
        call(onCartItemsChange),
        call(onSignOutSuccess),
    ]);
}
