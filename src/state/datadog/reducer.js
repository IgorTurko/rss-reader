import { FETCH_DATA} from './actions';

const defaultState = {
    feed: []
}

export function datadogReducer(state = defaultState, action) {
    console.log('aaa', action)

    switch (action.type) {
        case FETCH_DATA:
            return {
                feed: action.feed.items 
            }
        default:
            return state;
    }
}
