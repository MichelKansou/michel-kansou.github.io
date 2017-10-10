import React from 'react';
import PropTypes from 'prop-types';

const Profile = (props) =>  {
    const translation = props.translation;
    const description = translation.profile.description.split('\n').map((item, key) => {
        return <span key={key}>{item}<br /></span>
    });
    return (
        <div className='col-container'>
            <h3 className='segment-title'><i className='fa fa-user-o' /> {translation.profile.title}</h3>
            <p>{description}</p>
        </div>
    );
}

Profile.propTypes = {
    translation: PropTypes.object
};

export default Profile;
