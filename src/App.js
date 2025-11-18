import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyChoose from './components/WhyChoose';
import Specializes from './components/Specializes';
import WhoItsFor from './components/WhoItsFor';
import DeliveryTeams from './components/DeliveryTeams';
import Dashboard from './components/Dashboard';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <WhyChoose />
      <Specializes />
      <WhoItsFor />
      <DeliveryTeams />
      <Dashboard />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;