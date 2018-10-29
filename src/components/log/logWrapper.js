import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../spinner';
import Info from '../info';

class LogWrapperComponent extends PureComponent {
    async componentDidMount() {
        const { onGetData, rssUrl } = this.props;

        await onGetData(rssUrl);

        this.timer = setInterval(async () => {
            await onGetData(rssUrl);
        }, 10 * 60 * 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        const { feed, loading, children } = this.props;

        return (
            <React.Fragment>
            {
                loading && <Spinner />
            }
            {
                !loading && <Info message="Automatic refresh of status once per 10 minutes." />
            }
            {
                children(feed)
            }
            {
                (!loading && feed.length === 0) && <div>No data</div>
            }
            </React.Fragment>
        );
    }
}

LogWrapperComponent.propTypes = {
    onGetData: PropTypes.func.isRequired,
    children: PropTypes.func.isRequired,
    feed: PropTypes.array.isRequired,
    rssUrl: PropTypes.string.isRequired,  
    loading: PropTypes.bool.isRequired 
}

export default LogWrapperComponent;