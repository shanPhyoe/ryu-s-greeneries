import React from 'react';
import { Link } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import Item from '../item/item.component';

import './plants-list.styles.scss';

const PlantsList = ({ title, items, buttonName, buttonLink }) => {
    return (
        <div className="plants-list">
            {title && <h3 className="plants-list__heading">{title}</h3>}
            <div className="plants-list__container">
                {items.map(item => {
                    return <Item key={item.id} item={item} />;
                })}
            </div>
            {buttonLink && (
                <Link to={`${buttonLink}`}>
                    <CustomButton isDefault={true}>{buttonName}</CustomButton>
                </Link>
            )}
        </div>
    );
};

export default PlantsList;
