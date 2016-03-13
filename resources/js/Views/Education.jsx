var React = require('react');
var T = require('i18n-react');

var Education = React.createClass({
    render: function() {
      var trans = this.props.trans;
      return (
          <div className="ui inverted vertical masthead center aligned segment customSegment1">
              <div className="ui text container vertical-timeline-container">
                  <div className="segment-title">
                      <i className="fa fa-graduation-cap"> - <T text={trans + 'Education.title'}/> </i>
                          <div id="timeline">
                            <div className="timeline-item">
                                <div className="timeline-icon">
                                    <img className="timeline-img" src="http://izee.ro/market/mywall/one/img/ed1.png" alt="Picture"/>
                                </div>
                                <div className="timeline-date"><T text={trans + 'Education.college2.date'}/></div>
                                    <div className="timeline-content">
                                        <h4><T text={trans + 'Education.college2.degree'}/></h4>
                                        <p>
                                            <T text={trans + 'Education.college2.name'}/>
                                        </p>
                                    </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-icon">
                                    <img className="timeline-img" src="http://izee.ro/market/mywall/one/img/ed2.png" alt="Picture"/>
                                </div>
                                <div className="timeline-date right"><T text={trans + 'Education.college.date'}/></div>
                                    <div className="timeline-content right">
                                        <h4><T text={trans + 'Education.college.degree'}/></h4>
                                        <p>
                                            <T text={trans + 'Education.college.name'}/>
                                        </p>
                                    </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-icon">
                                    <img className="timeline-img" src="http://izee.ro/market/mywall/one/img/ed3.png" alt="Picture"/>
                                </div>
                                <div className="timeline-date"><T text={trans + 'Education.high-school.date'}/></div>
                                    <div className="timeline-content">
                                        <h4><T text={trans + 'Education.high-school.degree'}/></h4>
                                        <p>
                                            <T text={trans + 'Education.high-school.name'}/>
                                        </p>
                                    </div>
                            </div>
                        </div>
                  </div>
              </div>
        </div>
      );
    }
});

export default Education;
