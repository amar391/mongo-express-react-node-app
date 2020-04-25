import React from "react";
import { Provider } from "react-redux";
import { Redirect } from "react-router";
import { Router, Route } from "react-router-dom";

import Login from "./Login";
import Dashboard from "./Dashboard";
import Navigation from "./Navigation";
import TaskDetail from "./TaskDetail";
import { store } from "../store";
import { history } from "../store/history";

const RouteGuard = Component => ({ match }) => {
    console.info('Route guard', match);
    if(!store.getState().session.authenticated) {
        // reroute
        return <Redirect to="/" />
    }
    return <Component match={match} />
}

const Main = () => (
    <Router history={history}>
        <Provider store={store}>
            <div>
                <Navigation />
                <Route
                    exact
                    path="/"
                    component={Login}
                />
                <Route
                    exact
                    path="/dashboard"
                    render={RouteGuard(Dashboard)}
                />
                <Route
                    exact
                    path="/task/:id"
                    render={RouteGuard(TaskDetail)}
                />
            </div>
        </Provider>
    </Router>
)

export default Main;