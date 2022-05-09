import SignInSignUpTypes from './sign-in-sign-up.types';

const INITIAL_STATE = {
    signInSession: true,
};

const signInSignUpReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SignInSignUpTypes.SIGN_IN_SESSION:
            return {
                ...state,
                signInSession: action.payload,
            };
        default:
            return state;
    }
};

export default signInSignUpReducer;
