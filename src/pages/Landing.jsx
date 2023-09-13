import React from 'react';
import Navbar from '../components/nav/Navbar';
import LandingInfo from '../components/landingInfo/LandingInfo';
import Maps from '../components/googlemaps/Maps';
import Footer from '../components/footer/Footer';

const Landing = () => {
    return(
        <>
            <div style={{minHeight: '100vh'}}>
            <Navbar />
            <LandingInfo />
            <Maps />
            </div>
            <Footer />
        </>
    );
}

export default Landing;