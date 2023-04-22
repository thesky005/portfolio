import React from 'react';
import './App.css';
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Skill from './components/Skill';
import Project from './components/Project';
import Details from './components/Details';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
     
      <Router>
        <Routes>
          <Route path ="/" element ={<Home/>}/>
          <Route path ="/project" element ={<Project/>}/>
          <Route path ="/detail" element ={<Details/>}/>
          <Route path ="/contact" element ={<Contact/>}/>
          {/*<Route path ="/Contact" element ={<Home/>}/>
          <Route path ="/about" element ={<Home/>}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
