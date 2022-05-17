import React from 'react';

import Image from '../../assets/img/ivy-art-2.png';

import Header from '../../components/header/header.component';
import ScrollToReveal from '../../components/scroll-to-reveal/scroll-to-reveal.component';
import TopSelling from '../../components/top-selling/topselling.component';
import Advantage from '../../components/advantage/advantage.component';

import './homepage.styles.scss';

const HomePage = () => {
    return (
        <div className="homepage">
            <Header />
            <ScrollToReveal threshold="0.1" fromTop={true}>
                {/* This image is from vecteezy.com */}
                <img src={Image} className="homepage__image" alt="" />
            </ScrollToReveal>
            <TopSelling />
            <Advantage />
        </div>
    );
};

export default HomePage;
