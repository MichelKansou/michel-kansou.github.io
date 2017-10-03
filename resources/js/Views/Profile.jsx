import React from 'react';
import PropTypes from 'prop-types';

const Profile = (props) =>  {
    const trans = props.trans;
    return (
        <div className='segment profile light'>
            <div className='container'>
                <i className='fa fa-user-o fa-3x' />
                <h3 className='segment-title'>{trans.profile.title}<span className='point'>.</span></h3>
                <hr />
                <p>{trans.profile.description}</p>
            </div>
        </div>
    );
}

Profile.propTypes = {
    trans: PropTypes.object
};

export default Profile;
