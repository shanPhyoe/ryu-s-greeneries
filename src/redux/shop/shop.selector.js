import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const selectShop = state => state.shop;

export const selectPlants = createSelector(selectShop, shop => shop.plants);

export const selectAllPlantsGroups = createSelector(selectPlants, plants =>
    plants ? Object.keys(plants).map(key => plants[key]) : []
);

export const selectCategory = memoize(categoryUrl =>
    createSelector(selectAllPlantsGroups, groups =>
        groups.find(group => group.routeName === categoryUrl)
    )
);

export const selectPlant = memoize(plantId =>
    createSelector(selectAllPlantsGroups, groups => {
        let allPlants = [];

        groups.forEach(group => allPlants.push(...group.items));

        return (
            allPlants && allPlants.find(plant => plant.id === parseInt(plantId))
        );
    })
);

export const selectFetchingStatus = createSelector(
    selectShop,
    shop => shop.isFetchingDone
);
