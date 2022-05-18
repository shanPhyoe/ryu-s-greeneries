import React from 'react';

import BestSellersData from './best-sellers.data';
import Ivy from '../../assets/img/ivy-art-1.png';

import PlantsList from '../plants-list/plants-list.component';
import ScrollToReveal from '../scroll-to-reveal/scroll-to-reveal.component';

import './best-sellers.styles.scss';

const BestSellers = () => {
    return (
        <div className="best-sellers">
            <ScrollToReveal fromLeft={true} threshold=".3">
                <img src={Ivy} alt="" className="best-sellers__art" />
            </ScrollToReveal>
            <PlantsList
                title="Best Sellers"
                items={BestSellersData}
                buttonName="Shop Now"
                buttonLink="shop"
            />
        </div>
    );
};

export default BestSellers;
