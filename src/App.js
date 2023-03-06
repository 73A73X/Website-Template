import React from 'react';
import './App.css';
import './Components/NavBar.css';
import HomePage from './Components/HomePage';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './Components/NavBar';
import AboutPage from './Components/AboutPage';


function App() {
  return (
    <BrowserRouter>
     <NavBar />
     <HomePage />
     <AboutPage />
    </BrowserRouter>
  );
}

export default App;
