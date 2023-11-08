import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import HomePage from './Pages/HomePage';
import AboutUs from './Pages/AboutUs';
import PlayStation3 from './Pages/PlayStation3';
import PlayStation3Consoles from './Pages/PlayStation3Consoles';
import PlayStation4 from './Pages/PlayStation4';
import PlayStation4Consoles from './Pages/PlayStation4Consoles';
import PlayStation5 from './Pages/PlayStation5';
import PlayStation5Consoles from './Pages/PlayStation5Consoles';
import Xbox360 from './Pages/Xbox360';
import Xbox360Consoles from './Pages/Xbox360Consoles';
import XboxOne from './Pages/XboxOne';
import XboxOneConsoles from './Pages/XboxOneConsoles';
import XboxSeries from './Pages/XboxSeries';
import XboxSeriesConsoles from './Pages/XboxSeriesConsoles';
import NintendoSwitch from './Pages/NintendoSwitch';
import NintendoSwitchConsoles from './Pages/NintendoSwitchConsoles';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Navbar />
          <div className="content">
            <Routes>
              <Route exact path="/HomePage" element={<HomePage />} />
              <Route exact path="/AboutUs" element={<AboutUs />} />
              <Route exact path="/PlayStation3" element={<PlayStation3 />} />
              <Route exact path="/PlayStation3Consoles" element={<PlayStation3Consoles />} />
              <Route exact path="/PlayStation4" element={<PlayStation4 />} />
              <Route exact path="/PlayStation4Consoles" element={<PlayStation4Consoles />} />
              <Route exact path="/PlayStation5" element={<PlayStation5 />} />
              <Route exact path="/PlayStation5Consoles" element={<PlayStation5Consoles />} />
              <Route exact path="/Xbox360" element={<Xbox360 />} />
              <Route exact path="/Xbox360Consoles" element={<Xbox360Consoles />} />
              <Route exact path="/XboxOne" element={<XboxOne />} />
              <Route exact path="/XboxOneConsoles" element={<XboxOneConsoles />} />
              <Route exact path="/XboxSeries" element={<XboxSeries />} />
              <Route exact path="/XboxSeriesConsoles" element={<XboxSeriesConsoles />} />
              <Route exact path="/NintendoSwitch" element={<NintendoSwitch />} />
              <Route exact path="/NintendoSwitchConsoles" element={<NintendoSwitchConsoles />} />
              <Route exact path="/*" element={<NotFound />} />
            </Routes>
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
