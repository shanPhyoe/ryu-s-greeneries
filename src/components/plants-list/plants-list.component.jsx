import React from 'react';
import { Link } from 'react-router-dom';

import Ivy from '../../assets/img/ivy-art-1.png';

import CustomButton from '../custom-button/custom-button.component';
import Item from '../item/item.component';

import './plants-list.styles.scss';
import ScrollToReveal from '../scroll-to-reveal/scroll-to-reveal.component';

const PlantsList = ({ title, items, buttonName, buttonLink }) => {
    return (
        <div className="types-overview">
            {title && <h3 className="types-overview__heading">{title}</h3>}
            <ScrollToReveal fromLeft={true} threshold=".3" triggeredOnce={true}>
                <img src={Ivy} className="types-overview__art" alt="" />
            </ScrollToReveal>
            <div className="types-overview__container">
                {items.map(item => {
                    return <Item key={item.id} item={item} />;
                })}
            </div>
            {buttonLink && (
                <Link to={`${buttonLink}`}>
                    <CustomButton>{buttonName}</CustomButton>
                </Link>
            )}
        </div>
    );
};

export default PlantsList;
