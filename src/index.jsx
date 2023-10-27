// React
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// CSS
import './index.scss';
// pages
import Home from './pages/home';
import About from './pages/about';
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
          <Route path='/aboutme' element={<About />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/404' element={<Notfound />} />
        </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  </React.StrictMode>
);

