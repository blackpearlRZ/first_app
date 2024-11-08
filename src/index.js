import React from 'react';
import ReactDOM from 'react-dom/client';
import './Hooks/counter.css';
//import Formulaire from './Hooks/produit.jsx';
//import Somme from './Hooks/formSomme.jsx'
//import Rechercher from './Hooks/FiltrerFruitLegume.jsx';
import ValiderPwd from './Hooks/ValiderPassword.jsx';
//import Counter from './Hooks/Counter.jsx';
import App from './Hooks/connexion.jsx';
import Inscription from './Hooks/inscription.jsx';
//import Homepage from './appanier.js';
import Compteur from './Hooks/conteurClass.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Compteur/>
  </React.StrictMode>
);