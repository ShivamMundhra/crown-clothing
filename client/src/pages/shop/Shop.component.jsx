import React, { useEffect, lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

// import CollectionPageContainer from "../collection/CollectionPage.container";
// import CollectionOverviewContainer from "../../components/collection-overview-box/CollectionOverview.container";

import Spinner from "../../components/spinner/Spinner.component";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

const CollectionPageContainer = lazy(() =>
  import("../collection/CollectionPage.container")
);
const CollectionOverviewContainer = lazy(() =>
  import(
    "../../components/collection-overview-box/CollectionOverview.container"
  )
);

const ShopPage = ({ match, fetchCollectionsStart }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className="shop-page">
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </Suspense>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
