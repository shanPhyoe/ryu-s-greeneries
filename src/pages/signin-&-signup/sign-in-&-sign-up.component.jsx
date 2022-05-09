import React from 'react';
import { connect } from 'react-redux';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './sign-in-&-sign-up.styles.scss';

const SignInSignUp = ({ signInSession }) => {
    return (
        <div className={`${signInSession ? 'sign-in' : ''} sign-in-sign-up`}>
            <SignIn />
            <SignUp />
        </div>
    );
};

const mapStateToProps = state => ({
    signInSession: state.signinsignup.signInSession,
});

export default connect(mapStateToProps)(SignInSignUp);
