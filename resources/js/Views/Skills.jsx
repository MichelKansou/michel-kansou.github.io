import React from 'react';
import PropTypes from 'prop-types';

export default class Skills extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showSkills: false
        };
        this.showSkills = this.showSkills.bind(this);
    };

    showSkills() {
        this.setState(prevState => ({
            showSkills: !prevState.showSkills
        }));
    }

    render() {
        const translation = this.props.translation;

        const webSkillsFront = translation.skills.web.front.map((data, index) =>
            <span key={index} className='skill'>{data.name}
                <div className='progress-wrapper' key={index}>
                    <div className='progress' style={{width: data.progress + "%"}}>
                        <span className='skills-percent'>{data.progress + "%"}</span>
                    </div>
                </div>
            </span>
        )
        const webSkillsBack = translation.skills.web.back.map((data, index) =>
            <span key={index} className='skill'>{data.name}
                <div className='progress-wrapper' key={index}>
                    <div className='progress' style={{width: data.progress + "%"}}>
                        <span className='skills-percent'>{data.progress + "%"}</span>
                    </div>
                </div>
            </span>
        )
        const mobileSkills = translation.skills.mobile.map((data, index) =>
            <span key={index} className='skill'>{data.name}
                <div className='progress-wrapper' key={index}>
                    <div className='progress' style={{width: data.progress + "%"}}>
                        <span className='skills-percent'>{data.progress + "%"}</span>
                    </div>
                </div>
            </span>
        )
        const softwareSkills = translation.skills.software.map((data, index) =>
            <span key={index} className='skill'>{data.name}
                <div className='progress-wrapper' key={index}>
                    <div className='progress' style={{width: data.progress + "%"}}>
                        <span className='skills-percent'>{data.progress + "%"}</span>
                    </div>
                </div>
            </span>
        )
        const database = translation.skills.database.map((data, index) =>
            <span key={index} className='skill'>{data.name}
                <div className='progress-wrapper' key={index}>
                    <div className='progress' style={{width: data.progress + "%"}}>
                        <span className='skills-percent'>{data.progress + "%"}</span>
                    </div>
                </div>
            </span>
        )
        const standard = translation.skills.standard.map((data, index) =>
            <span key={index} className='skill'>{data.name}
                <div className='progress-wrapper' key={index}>
                    <div className='progress' style={{width: data.progress + "%"}}>
                        <span className='skills-percent'>{data.progress + "%"}</span>
                    </div>
                </div>
            </span>
        )
        const tools = translation.skills.tools.map((data, index) =>
            <span key={index} className='skill'>{data.name}
                <div className='progress-wrapper' key={index}>
                    <div className='progress' style={{width: data.progress + "%"}}>
                        <span className='skills-percent'>{data.progress + "%"}</span>
                    </div>
                </div>
            </span>
        )

        const companions = translation.skills.companions.map((data, index) =>
            <div key={index} className='column'>
                <img src={data.image} />
                <h5 className='skill-title'>{data.name}</h5>
            </div>
        )

        return (
            <div className='skills-grid'>
                <div className='main-skills'>
                    <h3 className='segment-title'>{translation.skills.mainSkills.title}</h3>
                    <div className='row'>
                        <div className='column'>
                            <img src={translation.skills.mainSkills.react.image} />
                            <h5 className='skill-title'>{translation.skills.mainSkills.react.title}</h5>
                            <div className='progress-bar-container'>
                                <div className='progress' style={{width: translation.skills.mainSkills.react.progress + "%", backgroundColor: translation.skills.mainSkills.react.color}} />
                            </div>
                        </div>
                        <div className='column'>
                            <img src={translation.skills.mainSkills.swift.image} />
                            <h5 className='skill-title'>{translation.skills.mainSkills.swift.title}</h5>
                            <div className='progress-bar-container'>
                                <div className='progress' style={{width: translation.skills.mainSkills.swift.progress + "%", backgroundImage: 'linear-gradient(to bottom, #F88635, #FF2221)'}} />
                            </div>
                        </div>
                        <div className='column'>
                            <img src={translation.skills.mainSkills.laravel.image} />
                            <h5 className='skill-title'>{translation.skills.mainSkills.laravel.title}</h5>
                            <div className='progress-bar-container'>
                                <div className='progress' style={{width: translation.skills.mainSkills.laravel.progress + "%", backgroundColor: translation.skills.mainSkills.laravel.color}} />
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='companions'>
                    <h3 className='segment-title'>My Work Companions</h3>
                    <div className='row'>
                        {companions}
                    </div>
                </div>

                <div className='detail-button'>Show detail</div>
                <div className='chevron-button' onClick={this.showSkills}>
                    <i className={this.state.showSkills ? "fa fa-chevron-up" : "fa fa-chevron-down"} aria-hidden='true' />
                </div>
                <div className={this.state.showSkills ? "container shown" : "container hidden"}>
                    <div className='row'>
                        <div className='column'>
                            <h3 className='title'>Web</h3>
                            <h4 className='title'>Front-end</h4>
                            {webSkillsFront}
                            <h4 className='title'>Back-end</h4>
                            {webSkillsBack}
                        </div>
                        <div className='column'>
                            <h3 className='skills-title'>Mobile</h3>
                            {mobileSkills}
                            <h3 className='skills-title'>Software</h3>
                            {softwareSkills}
                            <h3 className='skills-title'>Database</h3>
                            {database}
                        </div>
                    </div>
                    <div className='resume-project'>
                        <p>This project is build with React JS.</p>
                        <a href='https://github.com/MichelKansou/michelkansou.github.io' className='btn' >See project on Github</a>
                    </div>
                    <div className='row'>
                        <div className='column'>
                            <h3 className='skills-title'>Standard</h3>
                            {standard}
                        </div>
                        <div className='column'>
                            <h3 className='skills-title'>Tools</h3>
                            {tools}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Skills.propTypes = {
    translation: PropTypes.object
};
