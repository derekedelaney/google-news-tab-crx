import React from 'react';
import { Loading } from '../Loading';
import { GoogleDoodle } from './';

function GoogleImages({ doodleLoading }) {
    return (
        <div className="logo-container">
            {doodleLoading ? (
                <Loading />
            ) : (
                <GoogleDoodle />
            )}
        </div>
    );
}

export default GoogleImages;
