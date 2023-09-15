import React from 'react';
import Navbar from '../components/nav/Navbar';
import ClientFeedbackSection from '../components/clientFeedback/ClientFeedback';
import Footer from '../components/footer/Footer';

const ClientFeedback = () => {
  return (
    <>
    <div style={{minHeight: '100vh'}}>
    <Navbar />
    <ClientFeedbackSection />
    </div>
    <Footer />
</>
  )
}

export default ClientFeedback