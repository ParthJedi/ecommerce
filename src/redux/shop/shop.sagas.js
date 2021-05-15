import { call, takeLatest, put } from 'redux-saga/effects';

import { firestore, collectionsSnapshotToMap  } from '../../firebase/firebase.utils';
import { fetchCollectionsSuccess, fetchCollectionsFailure }  from './shop.actions';

import ShopActionTypes from './shop.types';

// worker saga
export function* fetchCollesctionsAsync() {
    try {
    const collectionRef = firestore.collection('collections');
    const snapshot  = yield collectionRef.get();
    const collectionsMap = yield call(collectionsSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionsMap))
    } catch(error) {
        yield put(fetchCollectionsFailure(error.message))
    }
}


// wtacher saga
export function* fetchCollectionsStart() {
    // takeEvery is non blocking call
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollesctionsAsync)
}