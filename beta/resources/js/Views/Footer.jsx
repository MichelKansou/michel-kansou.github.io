var React = require('react');
var T = require('i18n-react');

var Footer = React.createClass({
    render: function() {
      var trans = this.props.trans;
      return (
          <div className="ui inverted vertical footer segment custom-footer">
              <div className="ui text container footer-container">
                  <div className="segment-title">
                      <i className="fa fa-paper-plane"> - <T text={trans + 'Footer.contact.title'}/> </i>
                  </div>
                  <T text={trans + 'Footer.contact.message'}/>
                  <div className="social-container">
                      <a href="mailto:michel.kansou@viacesi.fr"><i className="circular inverted yellow big mail outline icon"></i></a>
                      <a href="https://www.facebook.com/michel.kansou"><i className="circular inverted blue big facebook icon"></i></a>
                      <a href="https://twitter.com/MichelKansou"><i className="circular inverted blue big twitter icon"></i></a>
                      <a href="https://fr.linkedin.com/in/michel-kansou-4384a38a"><i className="circular inverted blue big linkedin icon"></i></a>
                      <a href="http://stackoverflow.com/users/4724949/michel"><i className="circular inverted grey big stack overflow icon"></i></a>
                      <a href="https://github.com/MichelKansou"><i className="circular inverted red big github icon"></i></a>
                  </div>
                  <br/><a className="ui orange button resume-download" href={"resources/CV/Michel Kansou CV-"+trans+"pdf"} >
                      <i className="fa fa-download"></i> <T text={trans + 'Profile.downloadCV'}/>
                        </a>
                <p id="copyright"><i className="fa fa-code"></i> with <i className="fa fa-heart"></i> <T text={trans + 'Footer.copyright'}/></p>
              </div>
        </div>
      );
    }
});

export default Footer;
