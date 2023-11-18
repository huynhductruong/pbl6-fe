
import React from 'react';
import { BrowserRouter as Router, Switch, Routes ,Route} from 'react-router-dom';
import Home from './pages/Home'
import Upload from './pages/Upload'
import Header from './components/Header';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
        
        </Routes>
        
    </Router>
  );
}

export default App;