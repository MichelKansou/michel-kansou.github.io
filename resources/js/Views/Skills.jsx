var React = require('react');
var T = require('i18n-react');
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
      var low = {left: "30%"};
      var low_medium = {left: "40%"};
      var medium = {left: "50%"};
      var medium_high = {left: "60%"};
      var high = {left: "70%"};
      var ultra = {left: "75%"};
      var expert = {left: "80%"};
      var awesome = {left: "90%"};
      var serial_killer = {left: "100%"};
      return (
        <div className="ui inverted vertical masthead center aligned segment customSegment1">
            <div className="ui text container skills-container">
                <div className="segment-title">
                    <i className="fa fa-cogs"> - <T text={trans + 'Skills.title'}/> </i>
                </div>
                <div className="ui stackable four column grid custom-grid">
                  <div className="column custom-column">
                      <h3 className="skills-title"><i className="fa fa-html5 fa"></i>  <T text={trans + 'Skills.web.title'}/></h3>
                          <span><T text={trans + 'Skills.web.html-css'}/>
                              <div className="progress-wrap progress">
                                  <div className="progress-bar progress" style={expert}></div>
                                </div>
                          </span>
                          <span><T text={trans + 'Skills.web.javascript'}/>
                              <div className="progress-wrap progress">
                                  <div className="progress-bar progress" style={medium_high}></div>
                                </div>
                          </span>
                          <span><T text={trans + 'Skills.web.react'}/>
                              <div className="progress-wrap progress">
                                  <div className="progress-bar progress" style={high}></div>
                                </div>
                          </span>
                          <span><T text={trans + 'Skills.web.php'}/>
                              <div className="progress-wrap progress">
                                  <div className="progress-bar progress" style={low}></div>
                                </div>
                          </span>
                          <span><T text={trans + 'Skills.web.sass'}/>
                              <div className="progress-wrap progress">
                                  <div className="progress-bar progress" style={medium_high}></div>
                                </div>
                          </span>
                          <span><T text={trans + 'Skills.web.responsive'}/>
                              <div className="progress-wrap progress">
                                  <div className="progress-bar progress" style={ultra}></div>
                                </div>
                          </span>
                          <span><T text={trans + 'Skills.web.semantic'}/>
                              <div className="progress-wrap progress">
                                  <div className="progress-bar progress" style={medium_high}></div>
                                </div>
                          </span>
                          <span><T text={trans + 'Skills.web.bootstrap'}/>
                              <div className="progress-wrap progress">
                                  <div className="progress-bar progress" style={high}></div>
                                </div>
                      </span>
                      <span><T text={trans + 'Skills.web.wordpress'}/>
                          <div className="progress-wrap progress">
                              <div className="progress-bar progress" style={medium}></div>
                            </div>
                    </span>
                  </div>
                  <div className="column custom-column">
                      <h3 className="skills-title"><i className="fa fa-mobile fa"></i>  <T text={trans + 'Skills.mobile.title'}/></h3>
                          <span><T text={trans + 'Skills.mobile.swift'}/>
                              <div className="progress-wrap progress">
                                  <div className="progress-bar progress" style={high}></div>
                                </div>
                          </span>
                          <span><T text={trans + 'Skills.mobile.react-native'}/>
                              <div className="progress-wrap progress">
                                  <div className="progress-bar progress" style={medium_high}></div>
                                </div>
                        </span>
                        <span><T text={trans + 'Skills.mobile.xcode'}/>
                            <div className="progress-wrap progress">
                                <div className="progress-bar progress" style={medium}></div>
                              </div>
                      </span>
                      <h3 className="skills-title"><i className="fa fa-cog fa"></i>  <T text={trans + 'Skills.tools.title'}/></h3>
                      <span><T text={trans + 'Skills.tools.atom'}/>
                          <div className="progress-wrap progress">
                              <div className="progress-bar progress" style={medium}></div>
                            </div>
                              </span>
                              <span><T text={trans + 'Skills.tools.electron'}/>
                                  <div className="progress-wrap progress">
                                      <div className="progress-bar progress" style={low_medium}></div>
                                    </div>
                          </span>
                          <span><T text={trans + 'Skills.tools.pixelmator'}/>
                              <div className="progress-wrap progress">
                                  <div className="progress-bar progress" style={medium}></div>
                                </div>
                      </span>
                      <span><T text={trans + 'Skills.tools.os'}/>
                          <div className="progress-wrap progress">
                              <div className="progress-bar progress" style={expert}></div>
                            </div>
                  </span>
                  </div>
                  <div className="column custom-column">
                      <h3 className="skills-title"><i className="fa fa-laptop fa"></i>  <T text={trans + 'Skills.software.title'}/></h3>
                      <span><T text={trans + 'Skills.software.java'}/>
                          <div className="progress-wrap progress">
                              <div className="progress-bar progress" style={medium_high}></div>
                            </div>
                      </span>
                      <span><T text={trans + 'Skills.software.c'}/>
                          <div className="progress-wrap progress">
                              <div className="progress-bar progress" style={high}></div>
                            </div>
                      </span>
                      <span><T text={trans + 'Skills.software.csharp'}/>
                          <div className="progress-wrap progress">
                              <div className="progress-bar progress" style={low}></div>
                            </div>
                      </span>
                      <span><T text={trans + 'Skills.software.python'}/>
                          <div className="progress-wrap progress">
                              <div className="progress-bar progress" style={low}></div>
                            </div>
                      </span>
                      <span><T text={trans + 'Skills.software.lua'}/>
                          <div className="progress-wrap progress">
                              <div className="progress-bar progress" style={low_medium}></div>
                            </div>
                      </span>
                      <h3 className="skills-title"><i className="fa fa-database fa"></i>  <T text={trans + 'Skills.database.title'}/></h3>
                          <span><T text={trans + 'Skills.database.sql'}/>
                              <div className="progress-wrap progress">
                                  <div className="progress-bar progress" style={low_medium}></div>
                                </div>
                          </span>
                          <span><T text={trans + 'Skills.database.mysql'}/>
                              <div className="progress-wrap progress">
                                  <div className="progress-bar progress" style={low_medium}></div>
                                </div>
                          </span>
                          <span><T text={trans + 'Skills.database.firebase'}/>
                              <div className="progress-wrap progress">
                                  <div className="progress-bar progress" style={medium}></div>
                                </div>
                          </span>
                  </div>
                  <div className="column custom-column">
                          <h3 className="skills-title"><i className="fa fa-plus-square fa"></i>  <T text={trans + 'Skills.standard.title'}/></h3>
                          <span><T text={trans + 'Skills.standard.github'}/>
                              <div className="progress-wrap progress">
                                  <div className="progress-bar progress" style={ultra}></div>
                                </div>
                          </span>
                          <span><T text={trans + 'Skills.standard.slack'}/>
                              <div className="progress-wrap progress">
                                  <div className="progress-bar progress" style={high}></div>
                                </div>
                          </span>
                          <span><T text={trans + 'Skills.standard.mvc'}/>
                              <div className="progress-wrap progress">
                                  <div className="progress-bar progress" style={low_medium}></div>
                                </div>
                          </span>
                          <span><T text={trans + 'Skills.standard.trello'}/>
                              <div className="progress-wrap progress">
                                  <div className="progress-bar progress" style={medium_high}></div>
                                </div>
                          </span>
                          <span><T text={trans + 'Skills.standard.agile'}/>
                              <div className="progress-wrap progress">
                                  <div className="progress-bar progress" style={low_medium}></div>
                                </div>
                          </span>
                          <span><T text={trans + 'Skills.standard.uml'}/>
                              <div className="progress-wrap progress">
                                  <div className="progress-bar progress" style={low_medium}></div>
                                </div>
                          </span>
                  </div>
                </div>
            </div>
      </div>
      );
    }
});

export default Skills;
