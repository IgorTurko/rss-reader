import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { store } from "./state/store";

import Navbar from './components/navbar';
import AzureStatus from './components/AzureStatus';
import DatadogStatus from './components/datadogStatus';

const Root = () => (
    <Provider store={store}>
        <Router>
            <React.Fragment>
                <Navbar />
                <main className="container">
                    <Switch>
                        <Route path='/data-dog' component={DatadogStatus} />
                        <Route path='/azure' component={AzureStatus} />
                        <Redirect from='/' to='/data-dog' />
                    </Switch>
                </main>
            </React.Fragment>
        </Router>
    </Provider>
)

export default Root;