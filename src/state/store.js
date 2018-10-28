import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rssReducer } from './rss/reducer';

export const store = createStore(combineReducers({
    rss: rssReducer,
}), applyMiddleware(thunk));