import { takeLatest, put, call, delay } from 'redux-saga/effects';
import cartActionTypes from '../cart/cart.types';
import userActionTypes from '../user/user.types';
import { clearPopupText } from './popup.action';

export function* clearPopup() {
    yield delay(1500);
    yield put(clearPopupText());
}

export function* afterCertainActions() {
    yield takeLatest(
        [
            userActionTypes.SIGN_UP_SUCCESS,
            userActionTypes.SIGN_UP_FAILURE,
            userActionTypes.SIGN_IN_SUCCESS,
            userActionTypes.SIGN_IN_FAILURE,
            userActionTypes.SIGN_OUT_SUCCESS,
            userActionTypes.SIGN_OUT_FAILURE,
            cartActionTypes.FETCH_CART_SUCCESS,
            cartActionTypes.ADD_ITEM_TO_CART,
        ],
        clearPopup
    );
}

export function* popupSagas() {
    yield call(afterCertainActions);
}
