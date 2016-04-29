var React = require('react');


var Education = React.createClass({
    render: function() {
      var trans = this.props.trans;
      var schoolsList = trans.Education.schools.map((data, index) =>
          <div className="timeline-item" key={index}>
              <div className="timeline-icon">
                  <img className="timeline-img" src={data.imgURL} />
              </div>
              <div className={"timeline-date "+data.position}>{data.date}</div>
                  <div className={"timeline-content "+data.position}>
                      <h4>{data.degree}</h4>
                      <p>
                          {data.name}
                      </p>
                  </div>
          </div>
      )
      return (
          <div className="ui inverted vertical masthead center aligned segment customSegment1">
              <div className="ui text container vertical-timeline-container">
                  <div className="segment-title">
                      <i className="fa fa-graduation-cap"> - {trans.Education.title} </i>
                          <div id="timeline">
                            {schoolsList}
                        </div>
                  </div>
              </div>
        </div>
      );
    }
});

export default Education;
