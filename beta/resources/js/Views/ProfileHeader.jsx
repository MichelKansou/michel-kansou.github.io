var React = require('react');
var T = require('i18n-react');

var ProfileHeader = React.createClass({
    render: function() {
      var trans = this.props.trans;
      return (
        <div className="ui inverted vertical masthead center aligned segment customSegment1">
            <div className="ui text container">
                <img className="ui medium circular image" src="./resources/images/Avatar.png"/>
              <h2 className="ui inverted header">
                <T text={trans + 'Presentation.hello'}/><span className="blinker"> |</span>
              </h2>
              <h3><T text={trans + 'Presentation.title'}/></h3>
            </div>
      </div>
      );
    }
});

export default ProfileHeader;
