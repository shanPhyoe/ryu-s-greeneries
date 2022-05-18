import React from 'react';

import Header from '../../components/header/header.component';
import BestSellers from '../../components/best-sellers/best-sellers.component';
import Advantage from '../../components/advantage/advantage.component';

import './homepage.styles.scss';

const HomePage = () => {
    return (
        <div className="homepage">
            <Header />
            <BestSellers />
            <Advantage />
        </div>
    );
};

export default HomePage;
