import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { datadogReducer } from './datadog/reducer';
import { azureReducer } from './azure/reducer';

export const store = createStore(combineReducers({
    datadog: datadogReducer,
    azure: azureReducer
}), applyMiddleware(thunk));