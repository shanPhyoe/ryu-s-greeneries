import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import IvyOne from '../../assets/img/ivy-art-3.png';
import IvyTwo from '../../assets/img/ivy-art-4.png';
import IvyThree from '../../assets/img/ivy-art-5.png';
import IvyFour from '../../assets/img/ivy-art-6.png';
import IvyFive from '../../assets/img/ivy-art-7.png';

import PlantsList from '../plants-list/plants-list.component';

import { selectAllPlantsGroups } from '../../redux/shop/shop.selector';

import './categories-overview.styles.scss';

const CategoriesOverview = ({ plantsGroups }) => {
    return (
        <div className="categories-overview">
            <img
                src={IvyOne}
                alt=""
                className="categories-overview__art categories-overview__art--1"
            />
            <img
                src={IvyTwo}
                alt=""
                className="categories-overview__art categories-overview__art--2"
            />
            <img
                src={IvyThree}
                alt=""
                className="categories-overview__art categories-overview__art--3"
            />
            <img
                src={IvyFour}
                alt=""
                className="categories-overview__art categories-overview__art--4"
            />
            <img
                src={IvyFive}
                alt=""
                className="categories-overview__art categories-overview__art--5"
            />
            {plantsGroups.map(group => {
                return (
                    <PlantsList
                        key={group.id}
                        title={group.category}
                        items={group.items.filter((_, index) => index < 3)}
                        buttonName="See More"
                        buttonLink={`${group.routeName}`}
                    />
                );
            })}
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    plantsGroups: selectAllPlantsGroups,
});

export default connect(mapStateToProps)(CategoriesOverview);
