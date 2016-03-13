var React = require('react');
var T = require('i18n-react');

var Experience = React.createClass({
    experienceData: function() {
        var data = ['kumquats', 'squart', 'lcomlocal', 'adenatis'];
        var trans = this.props.trans;
        var dataList = data.map(function(data, i){
                        return (
                            <div className="ui grid custom-grid-experience" key={i}>
                                <div className="six wide column custom-column-experience">
                                    <T text={trans + 'Work-experience.'+data+'.title'}/>
                                    <h4 className="experience-job-title" ><T text={trans + 'Work-experience.'+data+'.job-title'}/></h4>
                                </div>
                                <div className="ten wide column custom-column-experience">
                                <div className="ui stackable two column grid">
                                    <div className="column column-experience-description">
                                        <T text={trans + 'Work-experience.'+data+'.description'}/>
                                    </div>
                                <div className="column column-experience-date">
                                    <p className="experience-date"><T text={trans + 'Work-experience.'+data+'.date'}/></p>
                                </div>
                                </div>
                                </div>
                            </div>
                        );
                 })
        return   dataList ;
    },
    render: function() {
      var trans = this.props.trans;
      return (
          <div className="ui inverted vertical masthead center aligned segment customSegment2">
              <div className="ui text container experience-container">
                  <div className="segment-title">
                      <i className="fa fa-list"> - <T text={trans + 'Work-experience.title'}/> </i>
                      {this.experienceData()}
                  </div>
              </div>
        </div>
      );
    }
});

export default Experience;
