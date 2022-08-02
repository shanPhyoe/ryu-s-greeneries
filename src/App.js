import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { AnimatePresence } from 'framer-motion';

import { checkCurrentUser } from './redux/user/user.action';
import { selectCurrentUser } from './redux/user/user.selector';

import NavBar from './components/navbar/navbar.component';
import HomePage from './pages/home/homepage.component';
import AboutPage from './pages/about/aboutpage.component';
import ShopPage from './pages/shop/shoppage.component';
import SearchPage from './pages/search/searchpage.component';
import SignInSignUp from './pages/signin-&-signup/sign-in-&-sign-up.component';
import CheckOut from './pages/checkout/checkout.component';
import NotFound from './pages/notfound/not-found.component';
import CartDropdown from './components/cart-dropdown/cart-dropdown.component';
import Footer from './components/footer/footer.component';
import Popup from './components/popup/popup.component';
import ScrollToTop from './components/scroll-to-top/scroll-to-top.component';

import './App.scss';

const App = ({ currentUser, checkCurrentUser }) => {
    useEffect(() => {
        checkCurrentUser();
    });

    const location = useLocation();

    return (
        <div className="App">
            <NavBar />
            <ScrollToTop>
                <AnimatePresence exitBeforeEnter>
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/shop/*" element={<ShopPage />} />
                        <Route path="/search" element={<SearchPage />} />
                        <Route
                            path="/join"
                            element={
                                currentUser ? (
                                    <Navigate replace to="/" />
                                ) : (
                                    <SignInSignUp />
                                )
                            }
                        />
                        <Route path="/checkout" element={<CheckOut />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </AnimatePresence>
            </ScrollToTop>
            <CartDropdown />
            <Popup />
            <Footer />
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
    checkCurrentUser: () => dispatch(checkCurrentUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
