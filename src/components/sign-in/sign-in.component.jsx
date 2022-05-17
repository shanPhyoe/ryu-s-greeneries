import React, { useState } from 'react';
import { connect } from 'react-redux';

import sprite from '../../assets/icon/sprite.svg';

import { setSignInSession } from '../../redux/sign-in-sign-up/sign-in-sign-up.action';
import {
    googleSignInStart,
    emailSignInStart,
} from '../../redux/user/user.action';

import Form from '../form/form.component';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss';

const SignIn = ({ setSignInSession, googleSignInStart, emailSignInStart }) => {
    const [userCredentials, setUserCredentials] = useState({
        email: '',
        password: '',
    });

    const { email, password } = userCredentials;

    const handleChange = event => {
        const { name, value } = event.target;

        setUserCredentials({ ...userCredentials, [name]: value });
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.log('hey');
        emailSignInStart(email, password);
    };

    return (
        <div className="sign-in">
            <Form
                mainTitle="Welcome Back"
                subTitle="Please enter your account details."
            >
                <FormInput
                    name="email"
                    type="email"
                    label="Email"
                    value={email}
                    required
                    onChange={handleChange}
                    autoComplete="off"
                    key="email"
                />
                <FormInput
                    name="password"
                    type="password"
                    label="Password"
                    value={password}
                    required
                    onChange={handleChange}
                    key="password"
                />
                <CustomButton onClick={handleSubmit} isGreen key="submit">
                    Sign In
                </CustomButton>
                <CustomButton
                    isGoogleButton
                    key="google-button"
                    onClick={googleSignInStart}
                    type="button"
                >
                    <svg className="icon">
                        <use href={sprite + '#google-icon'} />
                    </svg>
                    Sign In with Google
                </CustomButton>
                <p key="text">
                    Don't have an account? Sign up
                    <span onClick={() => setSignInSession(false)}> here</span>.
                </p>
            </Form>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    setSignInSession: boolean => dispatch(setSignInSession(boolean)),
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) =>
        dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
