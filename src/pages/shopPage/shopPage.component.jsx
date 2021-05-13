import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from "react-router-dom";
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions'
import CollectionsOverviewContainer from '../../components/collections-overview/CollectionsOverview.container';
import CollectionPageContainer from '../collection/Collection.container';
import './shopPage.style.scss';

class ShopPage extends React.Component {
    componentDidMount() { 
        const { fetchCollectionsStartAsync } = this.props;
        fetchCollectionsStartAsync();
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
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);