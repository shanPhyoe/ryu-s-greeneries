import React from 'react';
import { Link } from 'react-router-dom';

import './item.styles.scss';

const Item = ({ item }) => {
    const { name, price, imageUrl, parentRoute, id } = item;

    return (
        <div className="item">
            <div className="item__img-container">
                <div className="item__overlay" />
                <div className="item__button">Add to Cart</div>
                <img src={imageUrl} alt="plant" className="item__image" />
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

export default Item;
