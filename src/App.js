
import React from 'react';
import { BrowserRouter as Router, Routes ,Route} from 'react-router-dom';
import Home from './pages/Home'
import Upload from './pages/Upload'
import Header from './components/Header';
import Diagnosis from './pages/Diagnosis';
import Login from './pages/loginComponents'
import Register from './pages/registerComponents'
import Profile from './pages/Profile/Profile';
import History from './pages/history';

function App() {
  return (
    <Router>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/diagnosis" element={<Diagnosis />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        </Routes>
        
    </Router>
  );
}

export default App;