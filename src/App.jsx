import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import Brand from './components/Brand';
import Portfolio from './components/Portfolio';

function App() {

  return (
    <>
      <Portfolio />
    </>
  )
}

export default App
