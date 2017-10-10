import React from 'react';
import PropTypes from 'prop-types';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // TODO Update blinker <span className='blinker'> |</span>

        const translation = this.props.translation;
        return (
            <section id='home' className='segment home dark' onMouseMove={this.onMouseMove}>
                <div id='header' className='header'>
                    <div className='content'>
                        <img className='avatar' src='./resources/images/avatar.png' />
                        <h1 className='header'>
                            {translation.presentation.hello}
                        </h1>
                        <h2>{translation.presentation.title}</h2>
                        <hr />
                        <div className='row'>
                            <a className='link' href='mailto:michel.kansou@viacesi.fr'><i className='fa fa-envelope-o' /></a>
                            <a className='link' href='https://twitter.com/MichelKansou'><i className='fa fa-twitter' /></a>
                            <a className='link' href='https://fr.linkedin.com/in/michel-kansou-4384a38a'><i className='fa fa-linkedin' /></a>
                            <a className='link' href='http://stackoverflow.com/users/4724949/michel'><i className='fa fa-stack-overflow' /></a>
                            <a className='link' href='https://github.com/MichelKansou'><i className='fa fa-github' /></a>
                        </div>
                        <div className='row'>
                            <a className='btn-o' href={translation.profile.resumeLink} >
                                {translation.profile.downloadBtn}
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

Home.propTypes = {
    translation: PropTypes.object
};
