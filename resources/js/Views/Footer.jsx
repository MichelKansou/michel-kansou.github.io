import React from 'react';
import PropTypes from 'prop-types';

const Footer = (props) =>  {
    const translation = props.translation;
    return (
        <footer>
            <div className='container'>
                <div className='row'>
                    <div className='column'>
                        <p id='copyright'><i className='fa fa-code' /> with <i className='fa fa-heart' /> {translation.footer.copyright}</p>
                    </div>
                    <div className='column'>
                        <a className='btn-l' href={translation.profile.resumeLink}>
                            {translation.profile.downloadBtn}
                        </a>
                    </div>
                    <div className='column'>
                        <a className='link' href='mailto:michel.kansou@viacesi.fr'><i className='fa fa-envelope-o' /></a>
                        <a className='link' href='https://twitter.com/MichelKansou'><i className='fa fa-twitter' /></a>
                        <a className='link' href='https://fr.linkedin.com/in/michel-kansou-4384a38a'><i className='fa fa-linkedin' /></a>
                        <a className='link' href='http://stackoverflow.com/users/4724949/michel'><i className='fa fa-stack-overflow' /></a>
                        <a className='link' href='https://github.com/MichelKansou'><i className='fa fa-github' /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

Footer.propTypes = {
    translation: PropTypes.object
};

export default Footer;
