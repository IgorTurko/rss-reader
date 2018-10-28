import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Loader from '../loader';
import Info from '../info';
import { getData } from '../../state/rss/actions';
import { DATADOG_RSS } from '../../config';
import './DatadogStatus.css';

class DatadogStatusComponent extends PureComponent {
    async componentDidMount() {
        const { onGetData } = this.props;

        await onGetData(DATADOG_RSS);

        this.timer = setInterval(async () => {
            await onGetData(DATADOG_RSS);
        }, 10 * 60 * 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        const { feed, loading } = this.props;

        return (
            <React.Fragment>
            {
                loading && <Loader />
            }
            {
                !loading && <Info message="Automatic refresh of status once per 10 minutes." />
            }
            {
                (feed || []).map(item => {
                    return (
                        <div className="row" key={item.guid}>
                            <div className="col">{item.title}</div>
                            <div className="col">
                            {
                                (item.contentSnippet.split('.') || []).map((log, i) => (
                                    <p key={`${item.guid}_${i}`}>{log}</p>
                                ))    
                            }
                            </div>
                        </div>
                    )
                })
            }
            </React.Fragment>
        );
    }
}

export default connect(
    state => ({...state.rss[DATADOG_RSS]}),
    dispatch => ({
        onGetData: rss => dispatch(getData(rss))
    })

)(DatadogStatusComponent);