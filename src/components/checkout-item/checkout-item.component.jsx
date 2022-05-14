import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {
    addItemToCart,
    reduceItemFromCart,
    removeItemFromCart,
} from '../../redux/cart/cart.action';

import './checkout-item.styles.scss';

const CheckoutItem = ({ item, addItem, reduceItem, removeItem }) => {
    return (
        <div className="checkout-item">
            <img
                src={item.imageUrl}
                alt={item.name}
                className="checkout-item__image"
            />
            <div className="checkout-item__details">
                <p className="checkout-item__price">Price: ${item.price}</p>
                <p className="checkout-item__quantity">
                    Quantity: x{item.quantity}
                </p>
                <p className="checkout-item__total">
                    Total: ${(item.price * item.quantity).toFixed(2)}
                </p>
            </div>
            <div className="checkout-item__buttons">
                <Link to={`/shop/${item.parentRoute}/${item.id}`}>
                    <h4 className="checkout-item__name">{item.name}</h4>
                </Link>
                <div className="checkout-item__controls-box">
                    <div
                        className="checkout-item__control checkout-item__control--small"
                        onClick={() => reduceItem(item)}
                    >
                        -
                    </div>
                    <div
                        className="checkout-item__control checkout-item__control--big"
                        onClick={() => removeItem(item)}
                    >
                        Remove
                    </div>
                    <div
                        className="checkout-item__control checkout-item__control--small"
                        onClick={() => addItem(item)}
                    >
                        +
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItemToCart(item)),
    reduceItem: item => dispatch(reduceItemFromCart(item)),
    removeItem: item => dispatch(removeItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
