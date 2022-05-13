import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import TypesOverview from '../types-overview/types-overview.component';

import { selectAllPlantsGroups } from '../../redux/shop/shop.selector';

import './categories-overview.styles.scss';

const CategoriesOverview = ({ plantsGroups }) => {
    return (
        <div className="categories-overview">
            {plantsGroups.map(group => {
                return (
                    <TypesOverview
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
