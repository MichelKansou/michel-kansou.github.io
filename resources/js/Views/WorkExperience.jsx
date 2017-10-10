import React from 'react';
import PropTypes from 'prop-types';

const Experience = (props) =>  {
    const translation = props.translation;
    const dataList = translation.workExperience.experiences.map((data, index) =>
        <div className='experience-grid' key={index}>
            <div className='row'>
                <h3 className='job-title' >{data.jobTitle}</h3>
            </div>
            <div className='row'>
                <h5 className='company-name'><i className='fa fa-building' />{data.title}</h5>
                <h5 className='job-type'>{data.jobType}</h5>
            </div>
            <div className='row'>
                <h5 className='job-date'><i className='fa fa-clock-o' />{data.date}</h5>
            </div>
        </div>
    )
    return (
        <div className='col-container'>
            <h3 className='segment-title'><i className='fa fa-briefcase' />{translation.workExperience.title}</h3>
            <div className='container'>
                {dataList}
            </div>
        </div>
    );
}

Experience.propTypes = {
    translation: PropTypes.object
};

export default Experience;
