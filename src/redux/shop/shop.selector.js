import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectPlants = createSelector(selectShop, shop => shop.plants);

export const selectPlantsForOverview = createSelector(selectPlants, plants =>
    plants ? Object.keys(plants).map(key => plants[key]) : []
);

export const selectFetchingStatus = createSelector(
    selectShop,
    shop => shop.isFetchingDone
);
