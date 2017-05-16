import React from 'react';

const Footer = (props) =>  {
    const trans = props.trans;
    return (
        <footer>
            <div className='container'>
                <div className='row'>
                    <div className='column'>
                        <p id='copyright'><i className='fa fa-code' /> with <i className='fa fa-heart' /> {trans.footer.copyright}</p>
                    </div>
                    <div className='column'>
                        <a className='btn-o' href={trans.profile.cvUrl} >
                            <i className='fa fa-download' /> {trans.profile.downloadCV}
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
    trans: React.PropTypes.object
};

export default Footer;
