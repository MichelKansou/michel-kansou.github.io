import React from 'react';

import Profile from './Profile.jsx';
import Skills from './Skills.jsx';
import Experience from './WorkExperience.jsx';
import Education from './Education.jsx';
import Portfolio from './Portfolio.jsx';
import Hobbies from './Hobbies.jsx';
import Contact from './Contact.jsx';

const PageContents = (props) =>  {

    const trans = props.trans;
    //   <section id="education">
    //       <Education trans={trans} />
    //   </section>
    return (
        <div className="page-contents">
            <section id="about">
                <Profile trans={trans} />
            </section>
            <section id="experience">
                <Experience trans={trans} />
            </section>
            <section id="skills">
                <Skills trans={trans} />
            </section>
            <section id="portfolio">
                <Portfolio trans={trans}/>
            </section>
            <section id="hobbies">
                <Hobbies trans={trans}/>
            </section>
            <section id="contact">
                <Contact trans={trans} />
            </section>
        </div>
    );
}

export default PageContents;
