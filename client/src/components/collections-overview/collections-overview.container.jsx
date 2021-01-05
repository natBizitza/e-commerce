import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsFetching } from '../../redux/shop/shop.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionsOverview from './collections-overview.component';

const mapStateToProps = createStructuredSelector({
    isLoading: selectCollectionsFetching
});

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner)(CollectionsOverview);

export default CollectionsOverviewContainer;
