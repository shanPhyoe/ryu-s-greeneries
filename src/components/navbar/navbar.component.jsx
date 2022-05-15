import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/user/user.selector';
import { signOutStart } from '../../redux/user/user.action';
import { toggleCartDropdown } from '../../redux/cart/cart.action';

import Logo from '../../assets/img/logo.png';

import CartIcon from '../cart-icon/cart-icon.component';

import { ReactComponent as SearchIcon } from '../../assets/icon/search.svg';
import { ReactComponent as Login } from '../../assets/icon/login.svg';
import { ReactComponent as Logout } from '../../assets/icon/logout.svg';

import './navbar.styles.scss';

const NavBar = ({ currentUser, signOutStart, toggleCartDropdown }) => {
    return (
        <nav className="navbar">
            <div className="navbar__logo-box">
                <Link to="/">
                    <img src={Logo} alt="Logo" className="navbar__logo" />
                </Link>
            </div>
            <ul className="navbar__links">
                <li className="navbar__item">
                    <Link to="/shop">
                        <div className="navbar__link">Shop</div>
                    </Link>
                </li>
                <li className="navbar__item">
                    <Link to="/search">
                        <SearchIcon className="navbar__icon" />
                    </Link>
                </li>
                {currentUser ? (
                    <li className="navbar__item" onClick={signOutStart}>
                        <Logout className="navbar__icon logout__icon" />
                        <p className="signed-in-user">
                            Signed in as {currentUser.displayName.toUpperCase()}
                        </p>
                    </li>
                ) : (
                    <li className="navbar__item">
                        <Link to="/join">
                            <Login className="navbar__icon login__icon" />
                        </Link>
                    </li>
                )}
                <li
                    className="navbar__item"
                    onClick={() => toggleCartDropdown()}
                >
                    <CartIcon />
                </li>
            </ul>
        </nav>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart()),
    toggleCartDropdown: () => dispatch(toggleCartDropdown()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
