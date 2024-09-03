import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx';
import './index.css'; // Assure-toi que ce fichier existe et contient les styles nécessaires
import { ToastContainer } from 'react-toastify';

// Créer la racine de l'application
const root = createRoot(document.getElementById('root'));

// Rendre l'application avec React.StrictMode et Router
root.render(
  <StrictMode>
    <Router>
      <ToastContainer />
      <App />
    </Router>
  </StrictMode>
);
