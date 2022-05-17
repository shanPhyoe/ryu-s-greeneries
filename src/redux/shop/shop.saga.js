import { takeLatest, call, put, all } from '@redux-saga/core/effects';
import { firestore } from '../../firebase/firebase.util';

import { snapshotToMap } from '../../firebase/firebase.util';
import { fetchPlantsSuccess, fetchPlantsFailure } from './shop.action';
import shopActionTypes from './shop.types';

export function* fetchPlantsStart() {
    try {
        const plantsRef = firestore.collection('plants');
        const plantsSnapshot = yield plantsRef.get();
        const plantsMap = yield call(snapshotToMap, plantsSnapshot);

        yield put(fetchPlantsSuccess(plantsMap));
    } catch (error) {
        yield put(fetchPlantsFailure(error.message));
    }
}

export function* onFetchPlantsInit() {
    yield takeLatest(shopActionTypes.FETCH_PLANTS_INIT, fetchPlantsStart);
}

export function* shopSagas() {
    yield all([call(onFetchPlantsInit)]);
}
