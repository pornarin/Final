import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Component/Home';
import Projects from './Component/Projects';
import './App.css';
import AboutMe from './Component/About Me';
import './AboutMe.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
            <Link to="/about">เกี่ยวกับฉัน</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<AboutMe/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;