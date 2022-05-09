import SignInSignUpTypes from './sign-in-sign-up.types';

export const setSignInSession = boolean => ({
    type: SignInSignUpTypes.SIGN_IN_SESSION,
    payload: boolean,
});
