import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    (collections) => collections ? Object.keys(collections).map((key)=> collections[key]): []
);

//memoizing the return of the F, in case we call it again with the same param we won't rerurn it again, cause the result will be the same.
export const selectCollection = memoize((collectionUrlParam) => 
    createSelector(
        [selectCollections],
        collections => (collections ? collections[collectionUrlParam] : null )
    )
);
