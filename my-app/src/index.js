import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDDm0k_97AqDVTKmRhT52USR3aT7LLtRrQ",
  authDomain: "gameslib.firebaseapp.com",
  projectId: "gameslib",
  storageBucket: "gameslib.appspot.com",
  messagingSenderId: "114170331925",
  appId: "1:114170331925:web:30adf668c2d5cdb4695f1c"
};

const app = initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
