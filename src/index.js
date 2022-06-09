import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCshPLMBdDmP9Co-eXrP3x6LKytd1pUQN8",
  authDomain: "react-coder-f6145.firebaseapp.com",
  projectId: "react-coder-f6145",
  storageBucket: "react-coder-f6145.appspot.com",
  messagingSenderId: "267879835218",
  appId: "1:267879835218:web:91788a339ba0cd50ae218b"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


