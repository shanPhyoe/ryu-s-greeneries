import React from 'react';

import topSellingData from './topselling.data';

import PlantsList from '../plants-list/plants-list.component';

import './topselling.styles.scss';

const TopSelling = () => {
    return (
        <div className="topselling">
            <PlantsList
                title="Top Sellers of the Week"
                items={topSellingData}
                buttonName="Shop Now"
                buttonLink="shop"
            />
        </div>
    );
};

export default TopSelling;
