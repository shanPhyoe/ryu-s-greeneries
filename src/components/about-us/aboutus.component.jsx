import React from 'react';

import Image from '../../assets/img/aboutus-img.jpg';

import './aboutus.styles.scss';

const AboutUs = () => {
    return (
        <header className="about-us">
            <img
                src={Image}
                alt="several houseplants on shelf"
                className="about-us__image"
            />
            <div className="about-us__content">
                <h2 className="about-us__heading">ABOUT US</h2>
                <p className="about-us__text">
                    Welcome to Ryu's Greeneries, your trustworthy source for
                    lovely indoor plants. We are dedicated to provide our
                    customers the best quality decorating plants and offer free
                    design consultation. Whether you are a beginner or an
                    enthusiast, we are sure that you will find a lovely plant
                    here which you would adore.
                </p>
            </div>
        </header>
    );
};

export default AboutUs;
