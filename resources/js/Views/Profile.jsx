var React = require('react');
var T = require('i18n-react');

var Profile = React.createClass({
    render: function() {
        var trans = this.props.trans;
        return (
            <div className="ui inverted vertical masthead center aligned segment customSegment2">
                <div className="ui text container">
                    <div className="segment-title">
                        <i className="fa fa-user"> - {trans.Profile.title} </i>
                    </div>
                    <h4>{trans.Profile.description}</h4>
                    <a className="ui custom button resume-download" href={trans.Profile.cvUrl} >
                        <i className="fa fa-download"></i> {trans.Profile.downloadCV}
                    </a>
                </div>
            </div>
        );
    }
});

export default Profile;
