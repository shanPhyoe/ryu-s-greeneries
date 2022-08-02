import React, { useState } from 'react';
import { connect } from 'react-redux';

import { setSignInSession } from '../../redux/sign-in-sign-up/sign-in-sign-up.action';
import { signUpStart } from '../../redux/user/user.action';

import Form from '../form/form.component';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-up.styles.scss';

const SignUp = ({ setSignInSession, signUpStart }) => {
    const [userCredentials, setUserCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const { displayName, email, password, confirmPassword } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();

        if (!displayName || !email || !password || !confirmPassword) return;

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        signUpStart(displayName, email, password);
    };

    const handleChange = event => {
        const { name, value } = event.target;

        setUserCredentials({ ...userCredentials, [name]: value });
    };

    return (
        <div className="sign-up">
            <Form
                mainTitle="Register"
                subTitle="Enter your personal details to get started."
            >
                <FormInput
                    name="displayName"
                    type="text"
                    label="Display Name"
                    value={displayName}
                    required
                    onChange={handleChange}
                    key="displayName"
                />
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
                <FormInput
                    name="confirmPassword"
                    type="password"
                    label="Confirm Password"
                    value={confirmPassword}
                    required
                    onChange={handleChange}
                    key="confirmPassword"
                />
                <CustomButton onClick={handleSubmit} isGreen key="submit">
                    Sign Up
                </CustomButton>
                <p key="text">
                    Already have an account? Sign in
                    <span onClick={() => setSignInSession(true)}> here</span>.
                </p>
            </Form>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    setSignInSession: boolean => dispatch(setSignInSession(boolean)),
    signUpStart: (displayName, email, password) =>
        dispatch(signUpStart({ displayName, email, password })),
});

export default connect(null, mapDispatchToProps)(SignUp);
