import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from "react-router-dom";
import { fetchCollectionsStart } from '../../redux/shop/shop.actions'
import CollectionsOverviewContainer from '../../components/collections-overview/CollectionsOverview.container';
import CollectionPageContainer from '../collection/Collection.container';
import './shopPage.style.scss';

class ShopPage extends React.Component {
    componentDidMount() { 
        const { fetchCollectionsStart } = this.props;
        fetchCollectionsStart();
    }

    render() {
        const {match} = this.props;
        return (<div className="shop-page">
                <Switch>
                    <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
                    <Route path={`${match.path}/:categoryId`} component={CollectionPageContainer} />
                </Switch>
            </div>)
        }
}


const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);