import React from 'react';
import PropTypes from 'prop-types';

const Education = (props) =>  {
    const translation = props.translation;
    const schoolsList = translation.education.schools.map((data, index) =>
        <div className='education-grid' key={index}>
            <div className='row'>
                <h3>{data.degree}</h3>
            </div>
            <div className='row'>
                <h5><i className='fa fa-university' />{data.name}</h5>
            </div>
            <div className='row'>
                <h5><i className='fa fa-clock-o' />{data.date}</h5>
            </div>
        </div>
    );

    return (
        <div className='col-container education'>
            <h3 className='segment-title'><i className='fa fa-graduation-cap' />{translation.education.title}</h3>
            <div className='container'>
                {schoolsList}
            </div>
        </div>
    );
}

Education.propTypes = {
    translation: PropTypes.object
};

export default Education;
