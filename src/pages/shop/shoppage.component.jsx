import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { fetchPlantsInit } from '../../redux/shop/shop.action';
import { selectFetchingStatus } from '../../redux/shop/shop.selector';

import CategoriesOverview from '../../components/categories-overview/categories-overview.component';
import PlantsCollectionPage from '../plants-collection-page/plants-collection-page.component';

import './shoppage.styles.scss';
import { createStructuredSelector } from 'reselect';

const ShopPage = ({ fetchPlantsInit, isFetchingDone }) => {
    useEffect(() => {
        !isFetchingDone && fetchPlantsInit();
    }, []);

    return (
        <div className="shop-page">
            <div className="shop-page__heading">
                <h2 className="shop-page__heading--text">
                    Ryu's Greeneries Shop
                </h2>
                {/* To add svg animation later!!! */}
            </div>
            <Routes>
                <Route path="" element={<CategoriesOverview />} />
                <Route
                    path=":plantsCategoryUrl/*"
                    element={<PlantsCollectionPage />}
                />
            </Routes>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    isFetchingDone: selectFetchingStatus,
});

const mapDispatchToProps = dispatch => ({
    fetchPlantsInit: () => dispatch(fetchPlantsInit()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
