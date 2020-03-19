import React from 'react';
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
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
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
