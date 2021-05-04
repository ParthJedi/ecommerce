import React from 'react';
import CollectionsOverviewComponent from '../../components/collections-overview/CollectionsOverview.component';
import CollectionPage from '../collection/CollectionPage.component';
import { Route, Switch } from "react-router-dom";
import './shopPage.style.scss';

const ShopPage = ({match}) => {
    return (        
            <div className="shop-page">
                <Switch>
                    <Route exact path={`${match.path}`} component={CollectionsOverviewComponent} />
                    <Route path={`${match.path}/:categoryId`} component={CollectionPage}/>
                </Switch>
            </div>
    )
}

export default ShopPage;