import React from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectCategory } from '../../redux/shop/shop.selector';

import TypesOverview from '../../components/types-overview/types-overview.component';
import NotFound from '../notfound/not-found.component';
import PlantDetails from '../plant-details/plant-details.component';

import './plants-category-page.styles.scss';

const PlantsCategoryPage = () => {
    const { plantsCategoryUrl } = useParams();
    const collection = useSelector(selectCategory(plantsCategoryUrl));

    return (
        <Routes>
            <Route
                path=""
                element={
                    <div className="category-page">
                        {collection ? (
                            <TypesOverview
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
            <Route path=":plantId" element={<PlantDetails />} />
        </Routes>
    );
};

export default PlantsCategoryPage;
