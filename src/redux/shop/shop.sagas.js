import { takeLatest, call, put } from "redux-saga/effects";

import ShopActionTypes from "./shop.types";
import { firestore, convertSnapShotToMap } from "../../firebase/firebase.utils";

import { fetchCollectionsSuccess, fetchCollectionsError } from "./shop.actions";

export function* fetchCollectionsAsync() {
  yield console.log("Saga Fired~~!!!!");

  try {
    const colletionRef = firestore.collection("collections");
    const snapShot = yield colletionRef.get();
    const collectionsMap = yield call(convertSnapShotToMap, snapShot);
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsError(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTION_START,
    fetchCollectionsAsync
  );
}
