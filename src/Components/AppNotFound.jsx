import React from 'react';
import dumpsterFire from './Images/background2.jpg'

function AppNotFound() {
    return (
        <div className = 'BackGroundImageMap' style = {{ backgroundImage: "url("+dumpsterFire+")"}}>
            <h1>Path does not exist.</h1>
        </div>
    );
}

export default AppNotFound;