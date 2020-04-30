import ShopActionType from "./shop.types";

export const fetchCollectionsStart = () => ({
  type: ShopActionType.FETCH_COLLECTION_START,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: ShopActionType.FETCH_COLLECTION_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsError = (errorMsg) => ({
  type: ShopActionType.FETCH_COLLECTION_FAILURE,
  payload: errorMsg,
});

// export const fetchCollectionsAsync = () => {
//   return (dispatch) => {
//     const colletionRef = firestore.collection("collections");
//     dispatch(fetchCollectionsStart());
//     // this.unsubscribeFromSnapshot = colletionRef.onSnapshot(async (snapShot) => {
//     //   const collectionsMap = convertSnapShotToMap(snapShot);
//     //   updateCollections(collectionsMap);
//     //   this.setState({ loading: false });
//     // });

//     colletionRef
//       .get()
//       .then((snapShot) => {
//         const collectionsMap = convertSnapShotToMap(snapShot);
//         dispatch(fetchCollectionsSuccess(collectionsMap));
//       })
//       .catch((error) => dispatch(fetchCollectionsError(error.message)));
//   };
// };
