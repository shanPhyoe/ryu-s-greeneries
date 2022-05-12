import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { checkCurrentUser } from './redux/user/user.action';
import { selectCurrentUser } from './redux/user/user.selector';

import NavBar from './components/navbar/navbar.component';
import HomePage from './pages/home/homepage.component';
import AboutPage from './pages/about/aboutpage.component';
import ShopPage from './pages/shop/shoppage.component';
import SearchPage from './pages/search/searchpage.component';
import SignInSignUp from './pages/signin-&-signup/sign-in-&-sign-up.component';
import NotFound from './pages/notfound/not-found.component';
import Footer from './components/footer/footer.component';

import './App.scss';

class App extends React.Component {
    componentDidMount() {
        const { checkCurrentUser } = this.props;
        checkCurrentUser();
    }

    render() {
        const { currentUser } = this.props;
        return (
            <div className="App">
                <NavBar />
                <Routes>
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
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
    checkCurrentUser: () => dispatch(checkCurrentUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
