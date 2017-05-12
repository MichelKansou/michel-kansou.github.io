import React from 'react';

const Experience = (props) =>  {
    const trans = props.trans;
    const dataList = trans.workExperience.experiences.map((data, index) =>
        <div className="experience-grid" key={index}>
            <div className="column">
                <h3 className="company-name">{data.title}</h3>
                <h5 className="job-date">{data.date}</h5>
                <h6 className="job-type">{data.jobType}</h6>
            </div>
            <div className="column wide">
                <h3 className="job-title" >{data.jobTitle}</h3>
                <p className="job-description">{data.description}</p>
            </div>
        </div>
    )
    return (
        <div>
            <div className="segment experience dark">
                <div className="container">
                    <i className="fa fa-briefcase fa-3x" aria-hidden="true"></i>
                    <h3 className="segment-title">{trans.workExperience.title}<span className="point">.</span></h3>
                    <hr/>
                    <div className="highlight-experience row">
                        <div className="column">
                            <i className="fa fa-html5 fa-2x"></i>
                            <h4 className="title">{trans.workExperience.webTitle}</h4>
                        </div>
                        <div className="column">
                            <i className="fa fa-mobile fa-2x"></i>
                            <h4 className="title">{trans.workExperience.mobileTitle}</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="segment experience light">
                <div className="container">
                    {dataList}
                </div>
            </div>
        </div>
    );
}

export default Experience;
