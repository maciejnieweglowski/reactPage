import React from "react";
import "./App.css";
import Navigation from "./Components/Navigation";
import AboutPage from "./Components/AboutPage";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Navigation/>} /> 
          <Route path="/Components/AboutPage" element={<AboutPage/>} />
        </ Routes>
      </div>
    </Router>
  );
}

export default App;
 