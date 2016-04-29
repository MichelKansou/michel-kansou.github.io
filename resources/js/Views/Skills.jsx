var React = require('react');

var skillsDB = require("../../locales/skills.yml");

var Skills = React.createClass({
    componentDidMount() {
        // var loaded = 0;
        //     $(document).scroll(function(){
        //         if($(this).scrollTop()>=$('#profile').position().top){
        //             // on page load...
        //             moveProgressBar();
        //             // on browser resize...
        //             $(window).resize(function() {
        //                 loaded = 0;
        //                 moveProgressBar();
        //             });
        //         }
        //     })
        // // SIGNATURE PROGRESS
        // function moveProgressBar() {
        //     if (!loaded == 1){
        //     var getPercent = ($('.progress-wrap').data('progress-percent') / 100);
        //     var getProgressWrapWidth = $('.progress-wrap').width();
        //     var progressTotal = getPercent * getProgressWrapWidth;
        //     var animationLength = 1000;
        //     console.log(progressTotal);
        //     // on page load, animate percentage bar to data percentage length
        //     // .stop() used to prevent animation queueing
        //     $('.progress-bar').stop().animate({
        //         left: progressTotal
        //     }, animationLength);
        //     }
        //}
    },
    render: function() {
        var trans = this.props.trans;
        var webSkills = skillsDB.Web_skills.map((data, index) =>
          <span key={index}>{data.name}
              <div className="progress-wrap progress" key={index}>
                  <div className="progress-bar progress" style={{left: data.progress}}></div>
                </div>
          </span>
        )
        var mobileSkills = skillsDB.Mobile_skills.map((data, index) =>
            <span key={index}>{data.name}
                <div className="progress-wrap progress" key={index}>
                    <div className="progress-bar progress" style={{left: data.progress}}></div>
                  </div>
            </span>
        )
        var tools = skillsDB.Tools.map((data, index) =>
            <span key={index}>{data.name}
                <div className="progress-wrap progress" key={index}>
                    <div className="progress-bar progress" style={{left: data.progress}}></div>
                  </div>
            </span>
        )
        var softwareSkills = skillsDB.Software_skills.map((data, index) =>
            <span key={index}>{data.name}
                <div className="progress-wrap progress" key={index}>
                    <div className="progress-bar progress" style={{left: data.progress}}></div>
                  </div>
            </span>
        )
        var database = skillsDB.Database.map((data, index) =>
            <span key={index}>{data.name}
                <div className="progress-wrap progress" key={index}>
                    <div className="progress-bar progress" style={{left: data.progress}}></div>
                  </div>
            </span>
        )
        var standard = skillsDB.Standard.map((data, index) =>
            <span key={index}>{data.name}
                <div className="progress-wrap progress" key={index}>
                    <div className="progress-bar progress" style={{left: data.progress}}></div>
                  </div>
            </span>
        )
      return (
        <div className="ui inverted vertical masthead center aligned segment customSegment1">
            <div className="ui text container skills-container">
                <div className="segment-title">
                    <i className="fa fa-cogs"> - {trans.Skills.title} </i>
                </div>
                <div className="ui stackable four column grid custom-grid">
                  <div className="column custom-column">
                      <h3 className="skills-title"><i className="fa fa-html5 fa"></i>  {trans.Skills.web.title} </h3>
                      {webSkills}
                  </div>
                  <div className="column custom-column">
                      <h3 className="skills-title"><i className="fa fa-mobile fa"></i>  {trans.Skills.mobile.title} </h3>
                         {mobileSkills}
                      <h3 className="skills-title"><i className="fa fa-cog fa"></i>  {trans.Skills.tools.title} </h3>
                         {tools}
                  </div>
                  <div className="column custom-column">
                      <h3 className="skills-title"><i className="fa fa-laptop fa"></i>  {trans.Skills.software.title} </h3>
                         {softwareSkills}
                      <h3 className="skills-title"><i className="fa fa-database fa"></i>  {trans.Skills.database.title} </h3>
                         {database}
                  </div>
                  <div className="column custom-column">
                          <h3 className="skills-title"><i className="fa fa-plus-square fa"></i>  {trans.Skills.standard.title} </h3>
                         {standard}
                  </div>
                </div>
            </div>
      </div>
      );
    }
});

export default Skills;
