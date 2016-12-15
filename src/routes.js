import React from "react";
import {Router, browserHistory, Route, IndexRoute} from "react-router";
import {syncHistoryWithStore} from "react-router-redux";
import SearchContainer from "./components/Search/SearchContainer";
import App from "./components/AppComponent";

export const AppRouter = ({store}) => (
    <Router history={syncHistoryWithStore(browserHistory, store)} >
        <Route path="/" component={App}>
            <IndexRoute component={SearchContainer}/>
        </Route>
    </Router>
);