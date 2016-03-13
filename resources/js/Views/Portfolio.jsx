var React = require('react');
var T = require('i18n-react');

var Portfolio = React.createClass({
    componentDidMount() {
    },
    render: function() {
      var trans = this.props.trans;
      return (
        <div className="ui inverted vertical masthead center aligned segment customSegment2">
            <div className="ui text container portfolio-container">
                <div className="segment-title">
                    <i className="fa fa-eye"> - <T text={trans + 'Portfolio.title'}/> </i>
                </div>
                <div className="ui link cards portfolio-cards">
                    <div className="card">
                      <div className="image">
                        <img src="./resources/images/Squart.png"/>
                      </div>
                      <div className="content">
                        <a className="header" href="https://itunes.apple.com/fr/app/id1032369864"><T text={trans + 'Portfolio.squart.title'}/></a>
                        <div className="description">
                            <T text={trans + 'Portfolio.squart.description'}/>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="image">
                        <img src="./resources/images/twelvelight.png"/>
                      </div>
                      <div className="content">
                        <a className="header" href="http://www.twelves-light.com/"><T text={trans + 'Portfolio.twelves-light.title'}/></a>
                        <div className="description">
                            <T text={trans + 'Portfolio.twelves-light.description'}/>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="image">
                        <img src="./resources/images/adenatis.png"/>
                      </div>
                      <div className="content">
                        <a className="header" href="http://www.commerces-en-scene.fr/"><T text={trans + 'Portfolio.adenatis.title'}/></a>
                        <div className="description">
                            <T text={trans + 'Portfolio.adenatis.description'}/>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
      </div>
      );
    }
});

export default Portfolio;
