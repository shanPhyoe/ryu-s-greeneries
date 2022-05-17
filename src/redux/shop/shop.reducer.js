import shopActionTypes from './shop.types';

const INITIAL_STATE = {
    plants: null,
    error: null,
    isFetchingDone: false,
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case shopActionTypes.FETCH_PLANTS_INIT:
            return {
                ...state,
                isFetchingDone: false,
            };
        case shopActionTypes.FETCH_PLANTS_SUCCESS:
            return {
                ...state,
                plants: action.payload,
                isFetchingDone: true,
                error: null,
            };
        case shopActionTypes.FETCH_PLANTS_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetchingDone: false,
            };
        default:
            return state;
    }
};

export default shopReducer;
