import userActionTypes from './user.types';

export const checkCurrentUser = () => ({
    type: userActionTypes.CHECK_CURRENT_USER,
});

export const signUpStart = userCredentials => ({
    type: userActionTypes.SIGN_UP_START,
    payload: userCredentials,
});

export const signUpSuccess = ({ user, otherData }) => ({
    type: userActionTypes.SIGN_UP_SUCCESS,
    payload: { user, otherData },
});

export const signUpFailure = error => ({
    type: userActionTypes.SIGN_UP_FAILURE,
    payload: error,
});

export const signInSuccess = user => ({
    type: userActionTypes.SIGN_IN_SUCCESS,
    payload: user,
});

export const signInFailure = error => ({
    type: userActionTypes.SIGN_IN_FAILURE,
    payload: error,
});

export const signOutStart = () => ({
    type: userActionTypes.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
    type: userActionTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = () => ({
    type: userActionTypes.SIGN_OUT_FAILURE,
});

export const emailSignInStart = ({ email, password }) => ({
    type: userActionTypes.EMAIL_SIGN_IN_START,
    payload: { email, password },
});

export const googleSignInStart = () => ({
    type: userActionTypes.GOOGLE_SIGN_IN_START,
});
