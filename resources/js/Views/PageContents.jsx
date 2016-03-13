var React = require('react');
var T = require('i18n-react');

import ProfileHeader from './ProfileHeader.jsx';
import Profile from './Profile.jsx';
import Skills from './Skills.jsx';
import Experience from './Work_Experience.jsx';
import Education from './Education.jsx';
import Portfolio from './Portfolio.jsx';
import AreaOfInterest from './AreaOfInterest.jsx';

var PageContents = React.createClass({
    render: function() {
      var trans = this.props.trans;
      return (
          <div className="page-contents">
              <ProfileHeader trans={trans}/>
              <section id="profile">
                  <Profile trans={trans}/>
              </section>
              <section id="skills">
                  <Skills trans={trans}/>
              </section>
              <section id="experience">
                  <Experience trans={trans}/>
              </section>
              <section id="education">
                  <Education trans={trans}/>
              </section>
              <section id="portfolio">
                  <Portfolio trans={trans}/>
              </section>
              <section id="contact">
                  <AreaOfInterest trans={trans}/>
              </section>
          </div>
      );
    }
});

export default PageContents;
