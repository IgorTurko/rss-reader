import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { store } from "./state/store";

import Navbar from './components/navbar';
import { DatadogLog, AzureLog } from './components/logs';

const Root = () => (
    <Provider store={store}>
        <Router>
            <React.Fragment>
                <Navbar />
                <main className="container">
                    <Switch>
                        <Route path='/data-dog' component={DatadogLog} />
                        <Route path='/azure' component={AzureLog} />
                        <Redirect from='/' to='/data-dog' />
                    </Switch>
                </main>
            </React.Fragment>
        </Router>
    </Provider>
)

export default Root;