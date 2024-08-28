import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx';
import './index.css'; // Assure-toi que ce fichier existe et contient les styles nécessaires

// Créer la racine de l'application
const root = createRoot(document.getElementById('root'));

// Rendre l'application avec React.StrictMode et Router
root.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);
