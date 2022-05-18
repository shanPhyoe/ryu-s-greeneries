import React from 'react';
import { Link } from 'react-router-dom';

import img from '../../assets/img/header-img.png';

import CustomButton from '../custom-button/custom-button.component';

import './header.styles.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="header__content">
                <div className="header__title">
                    <div className="header__title--sub">FIND YOUR</div>
                    <div className="header__title--main">
                        HEALTHY & LOVELY GREENERIES
                    </div>
                </div>
                <Link to="/about">
                    <CustomButton isGreen>About Us</CustomButton>
                </Link>
            </div>
            <div className="header__image-container">
                <img src={img} alt="header__image" className="header__image" />
            </div>
        </header>
    );
};

export default Header;
