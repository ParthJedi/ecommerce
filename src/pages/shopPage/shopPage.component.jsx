import React from 'react';
import CollectionsOverviewComponent from '../../components/collections-overview/CollectionsOverview.component';
import CollectionPage from '../collection/CollectionPage.component';
import { connect } from 'react-redux';
import { Route, Switch } from "react-router-dom";
import { firestore, collectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions'
import './shopPage.style.scss';

class ShopPage extends React.Component {
    unsubscribeFromSnapshot = null;
    
    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');
        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = collectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
        })
    }

    render() {
        const {match} = this.props;
        return (<div className="shop-page">
                <Switch>
                    <Route exact path={`${match.path}`} component={CollectionsOverviewComponent} />
                    <Route path={`${match.path}/:categoryId`} component={CollectionPage}/>
                </Switch>
            </div>)
        }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);