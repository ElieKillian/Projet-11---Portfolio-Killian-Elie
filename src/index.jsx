// React
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// CSS
import './index.scss';
// pages
import Home from './pages/home';
import Project from './pages/project';
import Projects from './pages/projects';
import Skills from './pages/skills';
import Contact from './pages/contact';
import Notfound from './pages/notfound';
// composants
import Header from './composants/header';
import Footer from './composants/footer';

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Router>
      <div className='router'>
        <div>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/:id' element={<Project />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/404' element={<Notfound />} />
        </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  </React.StrictMode>
);

