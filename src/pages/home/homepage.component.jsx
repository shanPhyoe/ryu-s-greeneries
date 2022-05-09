import React from 'react';

import Header from '../../components/header/header.component';
import TopSelling from '../../components/top-selling/topselling.component';
import Advantage from '../../components/advantage/advantage.component';

import './homepage.styles.scss';

const HomePage = () => {
    return (
        <div className="homepage">
            <Header />
            <TopSelling />
            <Advantage />
        </div>
    );
};

export default HomePage;
