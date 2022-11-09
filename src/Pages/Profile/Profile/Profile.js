import React from 'react';
import useTitle from '../../../Hooks/useTitle';

const Profile = () => {
    useTitle('Profile')
    return (
        <div>
            <h1>this is profile page</h1>
        </div>
    );
};

export default Profile;