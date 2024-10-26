import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Help from './pages/Help';
import ClimateInfo from './pages/ClimateInfo';
import PreventInfo from './pages/PreventInfo';
import Contact from './pages/Contact';
import Address from './pages/Address';
import './App.css';
import TopNavBar from './components/TopNavBar';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <TopNavBar />
        <div className="content">
          <Routes>
            <Route path="/" element={ <Home isDisaster />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/prevent" element={<PreventInfo />} />
            <Route path="/help" element={<Help isDisaster/>} />
            <Route path="/climate" element={<ClimateInfo />} />
            <Route path="/address" element={<Address />} />
          </Routes>
        </div>

        <div className="bottom-menu">
          <Link to="/contact">
            <button>👤</button>
          </Link>
          <Link to="/prevent">
            <button>ℹ️</button>
          </Link>
          <Link to="/help">
            <button>🚨</button>
          </Link>
          <Link to="/climate">
            <button>🌍</button>
          </Link>
        </div>
      </div>
    </Router>
  );
};

export default App;
