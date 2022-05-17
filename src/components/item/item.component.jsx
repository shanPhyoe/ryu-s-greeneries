import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { addItemToCart } from '../../redux/cart/cart.action';

import CustomButton from '../custom-button/custom-button.component';

import './item.styles.scss';

const Item = ({ item, addItem }) => {
    const { name, price, imageUrl, parentRoute, id } = item;

    return (
        <div className="item">
            <div className="item__img-container">
                <div className="item__overlay" />
                <div className="item__button" onClick={() => addItem(item)}>
                    <CustomButton isSquared fontDefault>
                        Add to Cart
                    </CustomButton>
                </div>
                <img src={imageUrl} alt="" className="item__image" />
            </div>
            <Link to={`/shop/${parentRoute}/${id}`} className="item__link">
                <div className="item__detail">
                    <h4 className="item__name">{name}</h4>
                    <div className="item__price">${price}</div>
                </div>
            </Link>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItemToCart(item)),
});

export default connect(null, mapDispatchToProps)(Item);
