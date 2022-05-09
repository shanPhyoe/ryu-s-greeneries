import React from 'react';

import './item.styles.scss';

const Item = ({ item }) => {
    const { name, price, imageUrl } = item;

    return (
        <div className="item">
            <div className="item__img-container">
                <div className="item__overlay" />
                <div className="item__button">Add to Cart</div>
                <img src={imageUrl} alt="plant" className="item__image" />
            </div>
            <div className="item__detail">
                <h4 className="item__name">{name}</h4>
                <div className="item__price">${price}</div>
            </div>
        </div>
    );
};

export default Item;
