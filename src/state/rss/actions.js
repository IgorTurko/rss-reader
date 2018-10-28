import Parser from 'rss-parser';
import { endpoints } from '../../config';

const parser = new Parser();

export const START_FETCH_DATA = "START_FETCH_DATA";
export const END_FETCH_DATA = "END_FETCH_DATA";

export const getData = rss => {
    return async dispatch => {
        
        dispatch({
            type: START_FETCH_DATA,
            rss
        });

        const feed = await parser.parseURL(endpoints[rss]);

        dispatch({
            type: END_FETCH_DATA,
            rss,
            feed
        });
    }
}