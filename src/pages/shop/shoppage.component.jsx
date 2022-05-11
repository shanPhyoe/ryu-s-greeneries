import React from 'react';
import { connect } from 'react-redux';

import { fetchPlantsInit } from '../../redux/shop/shop.action';
import { selectFetchingStatus } from '../../redux/shop/shop.selector';

import CategoriesOverview from '../../components/categories-overview/categories-overview.component';

import './shoppage.styles.scss';
import { createStructuredSelector } from 'reselect';

class ShopPage extends React.Component {
    componentDidMount() {
        const { fetchPlantsInit, isFetchingDone } = this.props;
        !isFetchingDone && fetchPlantsInit();
    }

    render() {
        return (
            <div className="shop-page">
                <div className="shop-page__heading">
                    <h2 className="shop-page__heading--text">
                        Ryu's Greeneries Shop
                    </h2>
                    {/* To add svg animation later!!! */}
                </div>
                <CategoriesOverview />
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    isFetchingDone: selectFetchingStatus,
});

const mapDispatchToProps = dispatch => ({
    fetchPlantsInit: () => dispatch(fetchPlantsInit()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
