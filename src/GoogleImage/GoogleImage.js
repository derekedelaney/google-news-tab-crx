import React from 'react';
import { GoogleDoodle } from './';

function GoogleImages({ doodles }) {
    return (
        <div className="logo-container">
            <GoogleDoodle doodles={doodles} />
        </div>
    );
}

export default GoogleImages;
