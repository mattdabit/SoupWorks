import React from "react";
import {Router, browserHistory, Route, IndexRoute} from "react-router";
import {syncHistoryWithStore} from "react-router-redux";
import SearchContainer from "./components/Search/SearchContainer";
import SearchResultsContainer from "./components/SearchResults/SearchResultsContainer";
import App from "./layouts/AppLayout";

export const AppRouter = ({store}) => (
    <Router history={syncHistoryWithStore(browserHistory, store)} >
        <Route path="/" component={App}>
            <IndexRoute component={SearchContainer}/>
            <Route path="search" component={SearchResultsContainer}/>
        </Route>
    </Router>
);