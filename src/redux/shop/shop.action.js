import shopActionTypes from './shop.types';

export const fetchPlantsInit = () => ({
    type: shopActionTypes.FETCH_PLANTS_INIT,
});

export const fetchPlantsSuccess = plantsMap => ({
    type: shopActionTypes.FETCH_PLANTS_SUCCESS,
    payload: plantsMap,
});

export const fetchPlantsFailure = error => ({
    type: shopActionTypes.FETCH_PLANTS_FAILURE,
    payload: error,
});
