import React from 'react';

const Profile = (props) =>  {
    const trans = props.trans;
    return (
        <div className="segment profile light">
            <div className="container">
                <i className="fa fa-user-o fa-3x"></i>
                <h3 className="segment-title">{trans.profile.title}</h3>
                <hr/>
                <p>{trans.profile.description}</p>
            </div>
        </div>
    );
}

export default Profile;
