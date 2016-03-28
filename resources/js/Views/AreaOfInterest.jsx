var React = require('react');
var T = require('i18n-react');

var AreaOfInterest = React.createClass({
    render: function() {
      var trans = this.props.trans;
      return (
          <div className="ui inverted vertical masthead center aligned segment customSegment1">
              <div className="ui text container hobbies-container">
                  <div className="segment-title hobbies-title">
                      <i className="fa fa-heart"> - <T text={trans + 'Hobbies.title'}/> </i>
                  </div>
                  <div className="ui stackable three column grid">
                      <div className="column">
                          <i className="circular large inverted music icon custom-icon-hobbies"></i>
                          <br/><T text={trans + 'Hobbies.music'}/>
                      </div>
                      <div className="column">
                          <i className="circular large inverted game icon custom-icon-hobbies"></i>
                          <br/><h3 className="hobbies-quotes-title"><T text={trans + 'Hobbies.video-game.title'}/></h3>
                          <h4 className="hobbies-quotes"><T text={trans + 'Hobbies.video-game.description'}/></h4>
                      </div>
                      <div className="column">
                          <i className="circular large inverted fork icon custom-icon-hobbies"></i>
                          <br/><T text={trans + 'Hobbies.technology'}/>
                      </div>
                      <div className="column">
                          <i className="circular large inverted film icon custom-icon-hobbies"></i>
                          <br/><h3 className="hobbies-quotes-title"><T text={trans + 'Hobbies.movie.title'}/></h3>
                          <h4 className="hobbies-quotes">"<T text={trans + 'Hobbies.movie.quote'}/>"</h4>
                          <h5 className="hobbies-quotes-name">- <T text={trans + 'Hobbies.movie.name'}/></h5>
                      </div>
                      <div className="column">
                          <i className="circular large inverted apple icon custom-icon-hobbies"></i>
                          <br/><h3 className="hobbies-quotes-title"><T text={trans + 'Hobbies.apple.title'}/></h3>
                          <h4 className="hobbies-quotes">"<T text={trans + 'Hobbies.apple.quote'}/>"</h4>
                          <h5 className="hobbies-quotes-name">- <T text={trans + 'Hobbies.apple.name'}/></h5>
                      </div>
                      <div className="column">
                          <i className="circular large inverted book icon custom-icon-hobbies"></i>
                          <br/><h3 className="hobbies-quotes-title"><T text={trans + 'Hobbies.book.title'}/></h3>
                          <h4 className="hobbies-quotes"><T text={trans + 'Hobbies.book.description'}/></h4>
                      </div>
                    </div>
              </div>
        </div>
      );
    }
});

export default AreaOfInterest;
