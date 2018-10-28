import Parser from 'rss-parser';

const parser = new Parser();

export const FETCH_DATA = "FETCH_DATA";
export const fetchData = () => {
    return async dispatch => {
        const feed = await parser.parseURL('https://status.datadoghq.com/history.rss');

        dispatch({
            type: FETCH_DATA,
            feed
        });
    }
}