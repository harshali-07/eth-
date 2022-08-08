import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import './App.css';
import Home from './pages/Home';
import First from './pages/First';
function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home/first" element={<First />} />
   
        </Routes>
      </Router> 
   </div>
  );
}

export default App;
