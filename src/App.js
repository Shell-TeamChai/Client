import React from 'react';
import Landing from './pages/Landing';
import Feedback from './pages/Feedback';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return(
    <div style={{minWidth: '100vw', minHeight: '100vh'}}>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
          {/* <Route index element={<Home />} /> */}
          <Route path="feedback" element={<Feedback />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;
