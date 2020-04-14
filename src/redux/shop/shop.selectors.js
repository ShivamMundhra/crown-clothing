import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectShopData = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionForPreview = createSelector(
  [selectShopData],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectCollection = (collectionURLParam) =>
  createSelector(
    [selectShopData],
    (collections) => collections[collectionURLParam]
  );
