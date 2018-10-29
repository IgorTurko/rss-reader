import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LogWrapper from './logWrapper';
import { getData } from '../../state/rss/actions';
import { AZURE_RSS } from '../../config';

class AzureLogComponent extends PureComponent {
    render() {
        const { onGetData, loading, feed } = this.props;

        return (
            <LogWrapper    
                feed={feed}
                rssUrl={AZURE_RSS}
                loading={loading}
                onGetData={onGetData}>
            {
                feed => (feed || []).map(item => {
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
            </LogWrapper>
        );
    }
}

AzureLogComponent.propTypes = {
    onGetData: PropTypes.func.isRequired, 
    feed: PropTypes.array.isRequired,    
    loading: PropTypes.bool.isRequired 
}


export default connect(
    state => ({...state.rss[AZURE_RSS]}),
    dispatch => ({
        onGetData: rss => dispatch(getData(rss))
    })

)(AzureLogComponent);