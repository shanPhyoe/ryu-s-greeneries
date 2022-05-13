import React from 'react';
import { Link } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import Item from '../item/item.component';

import './types-overview.styles.scss';

const TypesOverview = ({ title, items, buttonName, buttonLink }) => {
    return (
        <div className="types-overview">
            <h3 className="types-overview__heading">{title}</h3>
            <div className="types-overview__container">
                {items.map(item => {
                    return <Item key={item.id} item={item} />;
                })}
            </div>
            <Link to={`${buttonLink}`}>
                <CustomButton>{buttonName}</CustomButton>
            </Link>
        </div>
    );
};

export default TypesOverview;
