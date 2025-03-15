import React from "react";
import ReactDOM from "react-dom/client"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Resources from "./components/Resources"; 
import "./styles/Layout.scss"; 
import App from "./App"; 

// Opprett en root for React-appen og rendere den
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* BrowserRouter for å håndtere client-side routing */}
    <BrowserRouter>
      <App /> {/* Render hovedkomponenten */}
    </BrowserRouter>
  </React.StrictMode>
);