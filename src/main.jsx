import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import loadParticlesScript from './loadParticle.js';

loadParticlesScript();

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
