import React from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCategory } from '../../redux/shop/shop.selector';
import { selectFetchingStatus } from '../../redux/shop/shop.selector';

import PlantsList from '../../components/plants-list/plants-list.component';
import NotFound from '../notfound/not-found.component';
import PlantDetails from '../plant-details/plant-details.component';
import WithLoader from '../../components/withLoader/withLoader.component';

import './plants-category-page.styles.scss';

const PlantDetailsWithLoader = WithLoader(PlantDetails);

const PlantsCategoryPage = ({ isFetchingDone }) => {
    const { plantsCategoryUrl } = useParams();
    const collection = useSelector(selectCategory(plantsCategoryUrl));

    return (
        <Routes>
            <Route
                path=""
                element={
                    <div className="category-page">
                        {collection ? (
                            <PlantsList
                                title={collection.category}
                                items={collection.items}
                                buttonName="Go Back"
                                buttonLink="/shop"
                            />
                        ) : (
                            <NotFound />
                        )}
                    </div>
                }
            />
            <Route
                path=":plantId"
                element={
                    <PlantDetailsWithLoader isFetchingDone={isFetchingDone} />
                }
            />
        </Routes>
    );
};

const mapStateToProps = createStructuredSelector({
    isFetchingDone: selectFetchingStatus,
});

export default connect(mapStateToProps)(PlantsCategoryPage);
