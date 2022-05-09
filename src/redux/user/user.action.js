import userTypes from './user.types';

export const checkCurrentUser = () => ({
    type: userTypes.CHECK_CURRENT_USER,
});

export const signUpStart = userCredentials => ({
    type: userTypes.SIGN_UP_START,
    payload: userCredentials,
});

export const signUpSuccess = ({ user, otherData }) => ({
    type: userTypes.SIGN_UP_SUCCESS,
    payload: { user, otherData },
});

export const signUpFailure = error => ({
    type: userTypes.SIGN_UP_FAILURE,
    payload: error,
});

export const signInSuccess = user => ({
    type: userTypes.SIGN_IN_SUCCESS,
    payload: user,
});

export const signInFailure = error => ({
    type: userTypes.SIGN_IN_FAILURE,
    payload: error,
});

export const signOutStart = () => ({
    type: userTypes.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
    type: userTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = () => ({
    type: userTypes.SIGN_OUT_FAILURE,
});

export const emailSignInStart = ({ email, password }) => ({
    type: userTypes.EMAIL_SIGN_IN_START,
    payload: { email, password },
});

export const googleSignInStart = () => ({
    type: userTypes.GOOGLE_SIGN_IN_START,
});
