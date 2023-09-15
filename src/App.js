import React from 'react';
import Landing from './pages/Landing';
import Feedback from './pages/Feedback';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUs from './pages/ContactUs';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ClientFeedback from './pages/ClientFeedback';

const App = () => {
  return(
    <div style={{minWidth: '100vw', minHeight: '100vh'}}>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
          {/* <Route index element={<Home />} /> */}
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/client-feedback" element={<ClientFeedback />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;
