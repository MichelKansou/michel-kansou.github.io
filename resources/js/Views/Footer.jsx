import React from 'react';

const Footer = (props) =>  {
    const trans = props.trans;
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="column">
                        <p id="copyright"><i className="fa fa-code"></i> with <i className="fa fa-heart"></i> {trans.footer.copyright}</p>
                    </div>
                    <div className="column">
                        <a className="btn-o" href={trans.profile.cvUrl} >
                            <i className="fa fa-download"></i> {trans.profile.downloadCV}
                        </a>
                    </div>
                    <div className="column">
                        <a className="link" href="mailto:michel.kansou@viacesi.fr"><i className="fa fa-envelope-o"></i></a>
                        <a className="link" href="https://twitter.com/MichelKansou"><i className="fa fa-twitter"></i></a>
                        <a className="link" href="https://fr.linkedin.com/in/michel-kansou-4384a38a"><i className="fa fa-linkedin"></i></a>
                        <a className="link" href="http://stackoverflow.com/users/4724949/michel"><i className="fa fa-stack-overflow"></i></a>
                        <a className="link" href="https://github.com/MichelKansou"><i className="fa fa-github"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
