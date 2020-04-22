import ShopActionType from "./shop.types";

export const updateCollections = (collectionsMap) => ({
  type: ShopActionType.UPDATE_COLLECIONS,
  payload: collectionsMap,
});
