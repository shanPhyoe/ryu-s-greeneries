import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectTotalItems } from '../../redux/cart/cart.selector';

import { ReactComponent as ShopIcon } from '../../assets/icon/cart.svg';

import './cart-icon.styles.scss';

const CartIcon = ({ totalItems }) => {
    return (
        <div className="cart-icon">
            <ShopIcon className="shop-icon" />
            {totalItems ? (
                <div className="total-items-container">
                    <span className="total-items">{totalItems}</span>
                </div>
            ) : null}
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    totalItems: selectTotalItems,
});

export default connect(mapStateToProps)(CartIcon);
