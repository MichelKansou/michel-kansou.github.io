import React from 'react';

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
            <div className="hexagon-loader">
                <ul className="hexagon-container">
                    <li className="hexagon hex_1"></li>
                    <li className="hexagon hex_2"></li>
                    <li className="hexagon hex_3"></li>
                    <li className="hexagon hex_4"></li>
                    <li className="hexagon hex_5"></li>
                    <li className="hexagon hex_6"></li>
                    <li className="hexagon hex_7"></li>
                </ul>
            </div>
        );
    }

    render() {
        const children = this.state.loading ? this.loader() : this.props.children;
        return (
            <div className="loader-container">
                {children}
            </div>
        )
    }
}

PageLoader.propTypes = {
  children: React.PropTypes.node.isRequired,
  loading: React.PropTypes.bool.isRequired
};
