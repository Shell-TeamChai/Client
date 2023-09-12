import React from 'react';
import Navbar from '../components/nav/Navbar';
import LandingInfo from '../components/landingInfo/LandingInfo';
import Maps from '../components/googlemaps/Maps';

const Landing = () => {
    return(
        <>
            <Navbar />
            <LandingInfo />
            <Maps />
        </>
    );
}

export default Landing;