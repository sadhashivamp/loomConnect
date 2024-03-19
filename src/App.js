

// App.js
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import RegistrationPage from "./Components/Registration";
import OwnerWorkerSelectionPage from './Components/OwnerWorkerSelectionPage'; 
import LoginPage from './Components/Login';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<LandingPage />} />
                <Route path="/selection" element={<OwnerWorkerSelectionPage />} />
                <Route path="/owner-registration" element={<RegistrationPage />} />
                <Route path="/worker-registration" element={<RegistrationPage />} />
                <Route path="/login" element={<LoginPage />} />
                {/* Add more routes for other pages */}
            </Routes>
        </Router>
    );
}

export default App;

