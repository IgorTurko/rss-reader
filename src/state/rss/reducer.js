import { START_FETCH_DATA, END_FETCH_DATA } from './actions';
import { DATADOG_RSS, AZURE_RSS } from '../../config';

const defaultRssState = {
    feed: [],
    loading: true
}

const defaultState = {

}

defaultState[DATADOG_RSS] = defaultRssState;
defaultState[AZURE_RSS] = defaultRssState;

export function rssReducer(state = defaultState, action) {
    switch (action.type) {
        case START_FETCH_DATA:
            return {
                ...state,
                [action.rss]: {
                    ...state[action.rss],
                    loading: true
                }
            }
        case END_FETCH_DATA:
        var a =  {
                ...state,
                [action.rss]: {
                    ...state[action.rss],
                    loading: false,
                    feed: [...action.feed.items]
                }
            }    

            return a;
        default:
            return state;
    }
}
