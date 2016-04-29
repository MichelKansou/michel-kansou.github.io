var React = require('react');

var Experience = React.createClass({
    render: function() {
      var trans = this.props.trans;
      var dataList = trans.WorkExperience.experiences.map((data, index) =>
          <div className="ui grid custom-grid-experience" key={index}>
              <div className="six wide column custom-column-experience">
                  {data.title}
                  <h4 className="experience-job-title" > {data.jobTitle} </h4>
              </div>
              <div className="ten wide column custom-column-experience">
                  <div className="ui stackable two column grid">
                      <div className="column column-experience-description">
                          {data.description}
                      </div>
                      <div className="column column-experience-date">
                          <p className="experience-date">
                              {data.date}
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      )
      return (
          <div className="ui inverted vertical masthead center aligned segment customSegment2">
              <div className="ui text container experience-container">
                  <div className="segment-title">
                      <i className="fa fa-list"> - {trans.WorkExperience.title} </i>
                      {dataList}
                  </div>
              </div>
        </div>
      );
    }
});

export default Experience;
