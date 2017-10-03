import React from 'react';
import PropTypes from 'prop-types';

import skillsDB from 'locales/skills.json';

const Skills = (props) =>  {
    const trans = props.trans;
    const webSkillsFront = skillsDB.webSkillsFront.map((data, index) =>
        <span key={index} className='skill'>{data.name}
            <div className='progress-wrapper' key={index}>
                <div className='progress' style={{width: data.progress}}>
                    <span className='skills-percent'>{data.progress}</span>
                </div>
            </div>
        </span>
    )
    const webSkillsBack = skillsDB.webSkillsBack.map((data, index) =>
        <span key={index} className='skill'>{data.name}
            <div className='progress-wrapper' key={index}>
                <div className='progress' style={{width: data.progress}}>
                    <span className='skills-percent'>{data.progress}</span>
                </div>
            </div>
        </span>
    )
    const mobileSkills = skillsDB.mobileSkills.map((data, index) =>
        <span key={index} className='skill'>{data.name}
            <div className='progress-wrapper' key={index}>
                <div className='progress' style={{width: data.progress}}>
                    <span className='skills-percent'>{data.progress}</span>
                </div>
            </div>
        </span>
    )
    const softwareSkills = skillsDB.softwareSkills.map((data, index) =>
        <span key={index} className='skill'>{data.name}
            <div className='progress-wrapper' key={index}>
                <div className='progress' style={{width: data.progress}}>
                    <span className='skills-percent'>{data.progress}</span>
                </div>
            </div>
        </span>
    )
    const database = skillsDB.database.map((data, index) =>
        <span key={index} className='skill'>{data.name}
            <div className='progress-wrapper' key={index}>
                <div className='progress' style={{width: data.progress}}>
                    <span className='skills-percent'>{data.progress}</span>
                </div>
            </div>
        </span>
    )
    const standard = skillsDB.standard.map((data, index) =>
        <span key={index} className='skill'>{data.name}
            <div className='progress-wrapper' key={index}>
                <div className='progress' style={{width: data.progress}}>
                    <span className='skills-percent'>{data.progress}</span>
                </div>
            </div>
        </span>
    )
    const tools = skillsDB.tools.map((data, index) =>
        <span key={index} className='skill'>{data.name}
            <div className='progress-wrapper' key={index}>
                <div className='progress' style={{width: data.progress}}>
                    <span className='skills-percent'>{data.progress}</span>
                </div>
            </div>
        </span>
    )
    return (
        <div className='segment skills dark'>
            <div className='container'>
                <i className='fa fa-cogs fa-3x' />
                <h3 className='segment-title'>{trans.skills.title}<span className='point'>.</span></h3>
                <hr />
                <div className='row'>
                    <div className='column'>
                        <h3 className='title'>Web</h3>
                        <h4 className='title'>Front-end</h4>
                        {webSkillsFront}
                        <h4 className='title'>Back-end</h4>
                        {webSkillsBack}
                    </div>
                    <div className='column'>
                        <h3 className='skills-title'>{trans.skills.mobile.title} </h3>
                        {mobileSkills}
                        <h3 className='skills-title'>{trans.skills.software.title} </h3>
                        {softwareSkills}
                        <h3 className='skills-title'>{trans.skills.database.title} </h3>
                        {database}
                    </div>
                </div>
                <div className='resume-project'>
                    <p>This project is build with React JS.</p>
                    <a href='https://github.com/MichelKansou/michelkansou.github.io' className='btn' >See project on Github</a>
                </div>
                <div className='row'>
                    <div className='column'>
                        <h3 className='skills-title'>{trans.skills.standard.title} </h3>
                        {standard}
                    </div>
                    <div className='column'>
                        <h3 className='skills-title'>{trans.skills.tools.title} </h3>
                        {tools}
                    </div>
                </div>
            </div>
        </div>
    );
}

Skills.propTypes = {
    trans: PropTypes.object
};

export default Skills;
