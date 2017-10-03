import React from 'react';
import PropTypes from 'prop-types';

export default class PageLoader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.loading != this.state.loading) {
            this.setState({
                loading: nextProps.loading
            });
        }
    }

    loader() {
        return (
            <div className='hexagon-loader'>
                <ul className='hexagon-container'>
                    <li className='hexagon hex_1' />
                    <li className='hexagon hex_2' />
                    <li className='hexagon hex_3' />
                    <li className='hexagon hex_4' />
                    <li className='hexagon hex_5' />
                    <li className='hexagon hex_6' />
                    <li className='hexagon hex_7' />
                </ul>
            </div>
        );
    }

    render() {
        const children = this.state.loading ? this.loader() : this.props.children;
        return (
            <div className='loader-container'>
                {children}
            </div>
        )
    }
}

PageLoader.propTypes = {
    children: PropTypes.node.isRequired,
    loading: PropTypes.bool.isRequired
};
