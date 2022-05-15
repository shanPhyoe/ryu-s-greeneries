import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { hideCartDropdown } from '../../redux/cart/cart.action';
import { AnimatePresence, motion } from 'framer-motion';

import {
    selectCartDropdown,
    selectCartItems,
} from '../../redux/cart/cart.selector';

import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';

const containerVariants = {
    hidden: {
        opacity: 0,
        x: '100vw',
    },
    visible: {
        opacity: 1,
        x: '0',
        transition: {
            type: 'spring',
        },
    },
};

const CartDropdown = ({ cartItems, cartDropdown, hideCartDropdown }) => {
    return (
        <AnimatePresence>
            {cartDropdown ? (
                <motion.div
                    key="modal"
                    className="cart-dropdown"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit={{ y: '100vh' }}
                >
                    <div className="cart-dropdown__top">
                        <h4 className="cart-dropdown__title">Cart Details</h4>
                        <span
                            className="cart-dropdown__exit"
                            onClick={() => hideCartDropdown()}
                        >
                            &#10006;
                        </span>
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
                                    You have not added any items to your cart
                                    yet.
                                </p>
                            </div>
                        )}
                    </div>
                    <Link to="/checkout">
                        <CustomButton isSquared isGrey>
                            Proceed to Checkout
                        </CustomButton>
                    </Link>
                </motion.div>
            ) : null}
        </AnimatePresence>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartDropdown: selectCartDropdown,
});

const mapDispatchToProps = dispatch => ({
    hideCartDropdown: () => dispatch(hideCartDropdown()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);
