import { put, takeLatest, all, call } from 'redux-saga/effects';

import userActionTypes from './user.types';

import {
    auth,
    createUserDocument,
    firestore,
    getCurrentUser,
    googleProvider,
} from '../../firebase/firebase.util';

import {
    signUpSuccess,
    signUpFailure,
    signInSuccess,
    signInFailure,
    signOutSuccess,
    signOutFailure,
} from './user.action';

export function* setCurrentUserFromUserRef(userRef) {
    try {
        const userSnapshot = yield userRef.get();
        yield put(
            signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
        );
    } catch (error) {
        yield put(signInFailure(error.message));
    }
}

////////////////////////////////////////////////////////////////////
//  checking whether a user is signed in or not on first browse
export function* checkCurrentUser() {
    try {
        const user = yield getCurrentUser();
        if (!user) return;

        const userRef = firestore.doc(`users/${user.uid}`);
        yield setCurrentUserFromUserRef(userRef);
    } catch (error) {
        yield put(signInFailure(error.message));
    }
}
export function* onCheckCurrentUser() {
    yield takeLatest(userActionTypes.CHECK_CURRENT_USER, checkCurrentUser);
}

////////////////////////////////////////////////////////////////////
//  signing up with email then auto signing in
export function* signUp({ payload: { displayName, email, password } }) {
    try {
        const { user } = yield auth.createUserWithEmailAndPassword(
            email,
            password
        );
        yield put(signUpSuccess({ user, otherData: { displayName } }));
    } catch (error) {
        yield put(signUpFailure(error.message));
    }
}
export function* signInAfterSignUp({ payload: { user, otherData } }) {
    try {
        const userRef = yield call(createUserDocument, user, otherData);
        yield setCurrentUserFromUserRef(userRef);
    } catch (error) {
        yield put(signInFailure(error.message));
    }
}
export function* onSignUpSuccess() {
    yield takeLatest(userActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
}
export function* onSignUpStart() {
    yield takeLatest(userActionTypes.SIGN_UP_START, signUp);
}

////////////////////////////////////////////////////////////////////
//  signing in with email
export function* emailSignIn({ payload: { email, password } }) {
    console.log('i am called');
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        const userRef = firestore.doc(`users/${user.uid}`);
        yield setCurrentUserFromUserRef(userRef);
    } catch (error) {
        yield put(signInFailure(error.message));
    }
}
export function* onEmailSignInStart() {
    yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, emailSignIn);
}

////////////////////////////////////////////////////////////////////
//  signing in with gmail
export function* googleSignIn() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider);
        const userRef = yield call(createUserDocument, user);
        yield setCurrentUserFromUserRef(userRef);
    } catch (error) {
        yield put(signInFailure(error.message));
    }
}
export function* onGoogleSignInStart() {
    yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, googleSignIn);
}

////////////////////////////////////////////////////////////////////
//  signing out
export function* userSignOut() {
    try {
        yield auth.signOut();
        yield put(signOutSuccess());
    } catch (error) {
        yield put(signOutFailure());
    }
}
export function* onSignOutStart() {
    yield takeLatest(userActionTypes.SIGN_OUT_START, userSignOut);
}

export function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onCheckCurrentUser),
        call(onSignOutStart),
        call(onSignUpStart),
        call(onSignUpSuccess),
        call(onEmailSignInStart),
    ]);
}
