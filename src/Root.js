import React from 'react';
import { Provider } from 'react-redux';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { store, history } from "./state/store";

import Navbar from './components/Navbar';
import AzureStatus from './components/AzureStatus';
import DatadogStatus from './components/DatadogStatus';

const Root = () => (
    <Provider store={store}>
        <Router history={history}>
            <React.Fragment>
                <Navbar />
                <Switch>
                    <Route path='/data-dog' component={DatadogStatus} />
                    <Route path='/azure' component={AzureStatus} />
                    <Redirect from='/' to='/data-dog' />
                </Switch>
            </React.Fragment>
        </Router>
    </Provider>
)

export default Root;