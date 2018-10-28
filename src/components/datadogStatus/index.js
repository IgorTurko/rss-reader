import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../../state/datadog/actions';
import './DatadogStatus.css';

class DatadogStatusComponent extends PureComponent {
    async componentDidMount() {
        const { onFetchData } = this.props;
        console.log('did')
        await onFetchData();
    }
    render() {
        const { feed } = this.props;

        return (
            <React.Fragment>
            {
                (feed || []).map(item => {
                    const logs = item.contentSnippet.split('.');

                    return (
                        <div className="row">
                            <div className="col">{item.title}</div>
                            <div className="col">
                            {
                                (logs || []).map(log => (<p className="">{log}</p>))    
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
    (state) => ({...state.datadog}),
    (dispatch) => ({
        onFetchData: () => dispatch(fetchData())
    })

)(DatadogStatusComponent);