import React from 'react';
import { Link } from 'react-router-dom';

import sprite from '../../assets/icon/sprite.svg';

import './footer.styles.scss';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__top">
                <div className="footer__left">
                    <h2 className="footer__title">Ryu's Greeneries</h2>
                    <span className="footer__text">
                        Your trustworthy source for lovely indoor plants
                    </span>
                    <div className="footer__icons-box">
                        <a
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer__link"
                        >
                            <svg className="footer__icon footer__icon--facebook">
                                <use href={sprite + '#facebook'} />
                            </svg>
                        </a>
                        <a
                            href="https://www.twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer__link"
                        >
                            <svg className="footer__icon footer__icon--twitter">
                                <use href={sprite + '#twitter'} />
                            </svg>
                        </a>
                        <a
                            href="https://www.youtube.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer__link"
                        >
                            <svg className="footer__icon footer__icon--youtube">
                                <use href={sprite + '#youtube'} />
                            </svg>
                        </a>
                    </div>
                </div>
                <ul className="footer__right">
                    <li className="footer__item">
                        <Link to="/about" className="footer__link">
                            About
                        </Link>
                    </li>
                    <li className="footer__item">
                        <Link to="/shop" className="footer__link">
                            Our Store
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="footer__bottom">
                Copyright by Ryu's Greeneries Co. Ltd. All rights reserved.
            </div>
        </div>
    );
};

export default Footer;
