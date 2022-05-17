import React from 'react';
import { connect } from 'react-redux';

import { removeItemFromCart } from '../../redux/cart/cart.action';

import './cart-item.styles.scss';

const CartItem = ({ item, removeItem }) => {
    const { imageUrl, name, price, quantity } = item;

    return (
        <div className="cart-item">
            <img src={imageUrl} alt={name} className="cart-item__image" />
            <div className="cart-item__details">
                <p className="cart-item__name">{name}</p>
                <p className="cart-item__price">
                    ${price} x {quantity}
                </p>
                <p className="cart-item__total">
                    ${(price * quantity).toFixed(2)}
                </p>
            </div>
            <span
                className="cart-item__remove"
                onClick={() => removeItem(item)}
            >
                REMOVE
            </span>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    removeItem: item => dispatch(removeItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CartItem);
