var React = require('react');
var T = require('i18n-react');

var Profile = React.createClass({
    render: function() {
      var trans = this.props.trans;
      return (
        <div className="ui inverted vertical masthead center aligned segment customSegment2">
            <div className="ui text container">
                <div className="segment-title">
                    <i className="fa fa-user"> - <T text={trans + 'Profile.title'}/> </i>
                </div>
                <h4><T text={trans + 'Profile.description'}/></h4>
                <a className="ui orange button resume-download" href={"resources/CV/Michel Kansou CV-"+trans+"pdf"} >
                    <i className="fa fa-download"></i> <T text={trans + 'Profile.downloadCV'}/>
                </a>
            </div>
      </div>
      );
    }
});

export default Profile;
