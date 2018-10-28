import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Loader from '../loader';
import { getData } from '../../state/rss/actions';
import { DATADOG_RSS } from '../../config';
import './DatadogStatus.css';

class DatadogStatusComponent extends PureComponent {
    async componentDidMount() {
        const { onGetData } = this.props;

        await onGetData(DATADOG_RSS);
    }
    
    render() {
        const { feed, loading } = this.props;

        return (
            <React.Fragment>
            {
                loading && <Loader />
            }
            {
                (feed || []).map(item => {
                    const logs = item.contentSnippet.split('.');

                    return (
                        <div className="row">
                            <div className="col">{item.title}</div>
                            <div className="col">
                            {
                                (logs || []).map(log => (<p>{log}</p>))    
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