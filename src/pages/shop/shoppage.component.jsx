import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { fetchPlantsInit } from '../../redux/shop/shop.action';
import { selectFetchingStatus } from '../../redux/shop/shop.selector';

import Vine from '../../components/vine-animate/vine-animate.component';
import { ReactComponent as VineOne } from '../../assets/icon/vine-1.svg';
import CategoriesOverview from '../../components/categories-overview/categories-overview.component';
import PlantsCategoryPage from '../plants-category-page/plants-category-page.component';
import WithLoader from '../../components/withLoader/withLoader.component';

import './shoppage.styles.scss';

const CategoriesOverviewWithLoader = WithLoader(CategoriesOverview);
const PlantsCategoryPageWithLoader = WithLoader(PlantsCategoryPage);

const ShopPage = ({ fetchPlantsInit, isFetchingDone }) => {
    useEffect(() => {
        !isFetchingDone && fetchPlantsInit();
    }, []);

    return (
        <div className="shop-page">
            <div className="shop-page__heading">
                <h1 className="shop-page__heading--text">
                    Ryu's Greeneries Shop
                </h1>
                <Vine Svg={VineOne} />
            </div>
            <Routes>
                <Route
                    path=""
                    element={
                        <CategoriesOverviewWithLoader
                            isFetchingDone={isFetchingDone}
                        />
                    }
                />
                <Route
                    path=":plantsCategoryUrl/*"
                    element={
                        <PlantsCategoryPageWithLoader
                            isFetchingDone={isFetchingDone}
                        />
                    }
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
