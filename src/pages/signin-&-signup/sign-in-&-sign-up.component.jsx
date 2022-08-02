import React from 'react';
import { connect } from 'react-redux';
import { motion } from 'framer-motion';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './sign-in-&-sign-up.styles.scss';

const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 },
};

const SignInSignUp = ({ signInSession }) => {
    return (
        <motion.div
            className={`${signInSession ? 'sign-in' : ''} sign-in-sign-up`}
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.5, type: 'easeInOut' }}
        >
            <SignIn />
            <SignUp />
        </motion.div>
    );
};

const mapStateToProps = state => ({
    signInSession: state.signinsignup.signInSession,
});

export default connect(mapStateToProps)(SignInSignUp);
