import React from 'react';

import topSellingData from './topselling.data';
import TypesOverview from '../types-overview/types-overview.component';

import './topselling.styles.scss';

const TopSelling = () => {
    return (
        <div className="topselling">
            <TypesOverview
                title="Top Sellers of the Week"
                items={topSellingData}
                buttonName="Shop Now"
                buttonLink="shop"
            />
        </div>
    );
};

export default TopSelling;
