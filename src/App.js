import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Nav from "./components/Nav"
import Main from "./components/Main"
import Menu from './components/Menu';
import Footer from './components/Footer';


function App() {
  return (
 
    <>
      <Nav/>
      <Menu/>
      <Router>
        <Main />
      </Router>
      <Footer />
    </>
  );
}

export default App;