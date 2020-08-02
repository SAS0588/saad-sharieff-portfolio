import React from 'react';
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Project from './components/Project';
import './App.css';

function App() {
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="jumbotron">
        <Jumbotron />
      </div>
      <div className="mainContent">
        <MainContent />
      </div>
      <div className="mainContent">
        <Project />
      </div>
      <div className="mainContent">
        <Contact />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
