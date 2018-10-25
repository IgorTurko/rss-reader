import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createHistory from "history/createBrowserHistory";
import { datadogReducer } from './datadog/reducer';
import { azureReducer } from './azure/reducer';

export const history = createHistory();

export const store = createStore(combineReducers({
    dataDog: datadogReducer,
    azure: azureReducer
}), applyMiddleware(thunk));