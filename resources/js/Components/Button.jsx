import React from 'react';

export default class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
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
            <div className='loader'>
                <div className='loader-inner line-scale'>
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                </div>
            </div>
        );
    }

    render() {
        const { text, className, call } = this.props;
        return (
            <button className={className ? className : 'btn'} onClick={() => call()}>
                {this.state.loading ? this.loader() : text}
            </button>
        )
    }
}

Button.propTypes = {
    text: React.PropTypes.string.isRequired,
    loading: React.PropTypes.bool.isRequired,
    className: React.PropTypes.string,
    call: React.PropTypes.func
};
