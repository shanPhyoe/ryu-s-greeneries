import React from 'react';
import { Link } from 'react-router-dom';

import topSellingData from './topselling.data';

import Item from '../item/item.component';
import CustomButton from '../custom-button/custom-button.component';

import './topselling.styles.scss';

const TopSelling = () => {
    return (
        <div className="topselling">
            <h2 className="topselling__title">Top Sellers of the Week</h2>
            <div className="topselling__panel">
                {topSellingData.map(plant => {
                    return <Item key={plant.id} item={plant} />;
                })}
            </div>
            <Link to="/shop">
                <CustomButton>Shop Now</CustomButton>
            </Link>
        </div>
    );
};

export default TopSelling;
