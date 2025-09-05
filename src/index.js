import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import './styles/scrollBar.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Socials from './components/Socials';
import Email from './components/Email';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Socials />
    <Email />
    <Home />
  </React.StrictMode>
);
