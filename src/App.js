import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function Menu() {
  return <h2>Menu Page</h2>;
}

function Reservations() {
  return <h2>Reservations Page</h2>;
}

function OrderOnline() {
  return <h2>Order Online Page</h2>;
}

function Login() {
  return <h2>Login Page</h2>;
}

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/order-online" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Main />
      <Footer />
    </Router>
  );
}

export default App;
