import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Servicios from './components/Servicios';
import Soluciones from './components/Soluciones';
import CalculadoraIntegral from './components/CalculadoraIntegral';
import Planes from './components/Planes';
import Testimonios from './components/Testimonios';
import FAQ from './components/FAQ';
import Contacto from './components/Contacto';
import Footer from './components/Footer';


function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Hero />
        <Servicios />
        <Soluciones />
        <CalculadoraIntegral />
        <Planes />
        <Testimonios />
        <FAQ/>
        <Contacto/>
        <Footer />

       
      </main>
    </div>
  );
}

export default App;
