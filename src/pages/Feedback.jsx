import React from 'react';
import Navbar from '../components/nav/Navbar';
import Feedback from '../components/feedback/Feedback';
import Footer from '../components/footer/Footer';

const FeedbackPage = () => {
    return(
        <>
            <div style={{minHeight: '95vh'}}>
            <Navbar />
            <Feedback />
            </div>
            <Footer />
        </>
    );
}

export default FeedbackPage;