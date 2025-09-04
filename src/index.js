import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import './styles/scrollBar.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Home />
  </React.StrictMode>
);
