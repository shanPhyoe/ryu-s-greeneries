import React from 'react';

import AboutUs from '../../components/about-us/aboutus.component';
import Believe from '../../components/believe/believe.component';
import Service from '../../components/service-section/service.component';

import './aboutpage.styles.scss';

const AboutPage = () => {
    return (
        <div className="aboutpage">
            <AboutUs />
            <Believe />
            <Service />
        </div>
    );
};

export default AboutPage;
