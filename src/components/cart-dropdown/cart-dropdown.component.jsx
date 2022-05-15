import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { selectCartItems } from '../../redux/cart/cart.selector';

import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems }) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-dropdown__top">
                <h4 className="cart-dropdown__title">Cart Details</h4>
                <span className="cart-dropdown__exit">&#10006;</span>
            </div>
            <div className="cart-dropdown__items">
                {cartItems.length ? (
                    cartItems.map(item => (
                        <CartItem item={item} key={item.id} />
                    ))
                ) : (
                    <div className="cart-dropdown__empty">
                        <h4 className="cart-dropdown__empty-heading">
                            Your cart is empty.
                        </h4>
                        <p className="cart-dropdown__empty-text">
                            You have not added any items to your cart yet.
                        </p>
                    </div>
                )}
            </div>
            <Link to="/checkout">
                <CustomButton isSquared isGrey>
                    Proceed to Checkout
                </CustomButton>
            </Link>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
