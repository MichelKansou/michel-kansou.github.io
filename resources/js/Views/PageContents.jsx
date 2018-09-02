import React from 'react';
import PropTypes from 'prop-types';

import Profile from './Profile.jsx';
import Skills from './Skills.jsx';
import Experience from './WorkExperience.jsx';
import Education from './Education.jsx';
import Portfolio from './Portfolio.jsx';
import Hobbies from './Hobbies.jsx';
import Contact from './Contact.jsx';

const PageContents = (props) =>  {
    const translation = props.translation;
    return (
        <div className='page-contents'>
            <div className='segment light about'>
                <section id='about'>
                    <div className='about-row'>
                        <Profile translation={translation} />
                        <Experience translation={translation} />
                        <Education translation={translation} />
                    </div>
                </section>
                <section id='skills'>
                    <Skills translation={translation} />
                </section>
            </div>
            <section id='portfolio'>
                <Portfolio translation={translation} />
            </section>
            <section id='hobbies'>
                <Hobbies translation={translation} />
            </section>
            <section id='contact'>
                <Contact translation={translation} />
            </section>
        </div>
    );
}

PageContents.propTypes = {
    translation: PropTypes.object
};

export default PageContents;
