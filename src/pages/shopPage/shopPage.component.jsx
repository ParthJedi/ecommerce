import React from 'react';
import CollectionsOverviewComponent from '../../components/collections-overview/CollectionsOverview.component';
import CollectionPage from '../collection/CollectionPage.component';
import { connect } from 'react-redux';
import { Route, Switch } from "react-router-dom";
import { firestore, collectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions'
import WithSpinner from '../../components/with-spinner/WithSpinner.component';
import './shopPage.style.scss';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverviewComponent);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

    state = {
        loading: true
    };

    unsubscribeFromSnapshot = null;
    
    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');
        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = collectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({loading: false})
        })
    }

    render() {
        const {match} = this.props;
        const {loading} = this.state;
        return (<div className="shop-page">
                <Switch>
                    <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />} />
                    <Route path={`${match.path}/:categoryId`} render={(props) => <CollectionsPageWithSpinner isLoading={loading} {...props}/>}/>
                </Switch>
            </div>)
        }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);