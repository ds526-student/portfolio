import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles/global.css';
import './styles/scrollBar.css';
import Navbar from './components/Navbar';
import Socials from './components/Socials';
import Email from './components/Email';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <Socials />
    <Email />
    <Home />
    <About />
    <Experience />
    <Projects />
    <Contact />
    <Footer />
  </BrowserRouter>
);
