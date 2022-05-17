import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
    selectCartItems,
    selectTotalItems,
    selectTotalPrice,
    selectTotalType,
} from '../../redux/cart/cart.selector';

import { ReactComponent as Cart } from '../../assets/icon/cart.svg';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.styles.scss';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

const CheckOut = ({ allCartItems, totalQuantity, totalType, totalPrice }) => {
    const shippingFee = 8;
    const totalShipping = totalPrice > 50 ? 0 : totalQuantity * shippingFee;

    return (
        <div className="checkout">
            <h2 className="checkout__heading">
                Your Cart
                <Cart className="checkout__cart-icon" />
            </h2>
            <div className="checkout__container">
                <div className="checkout__details">
                    {allCartItems.length ? (
                        allCartItems.map(cartItem => {
                            return (
                                <CheckoutItem
                                    item={cartItem}
                                    key={cartItem.id}
                                />
                            );
                        })
                    ) : (
                        <p className="checkout__no-item">
                            There is no items in your cart.
                        </p>
                    )}
                </div>
                <div className="summary">
                    <div className="summary__box">
                        <h4 className="summary__heading">Cart Summary</h4>
                        <div className="summary__item">
                            <div className="summary__text">Total Quantity:</div>
                            <div className="summary__text">{totalQuantity}</div>
                        </div>
                        <div className="summary__item">
                            <div className="summary__text">Total Types:</div>
                            <div className="summary__text">{totalType}</div>
                        </div>
                        <div className="summary__item">
                            <div className="summary__text">Total Price:</div>
                            <div className="summary__text">
                                ${totalPrice.toFixed(2)}
                            </div>
                        </div>
                        <div className="summary__item">
                            <div className="summary__text">Shipping:</div>
                            <div className="summary__text">
                                ${totalShipping}
                            </div>
                        </div>
                        <div className="summary__total">
                            Grand Total: $
                            {(totalPrice + totalShipping).toFixed(2)}
                        </div>
                    </div>
                    {totalQuantity ? (
                        <StripeCheckoutButton
                            price={(totalPrice + totalShipping).toFixed(2)}
                            cartItems={allCartItems}
                        />
                    ) : null}
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    allCartItems: selectCartItems,
    totalQuantity: selectTotalItems,
    totalType: selectTotalType,
    totalPrice: selectTotalPrice,
});

export default connect(mapStateToProps)(CheckOut);
