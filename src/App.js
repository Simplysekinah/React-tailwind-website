import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Heading from './Components/Heading';
import Analytics from './Components/Analytics';
import Newsletter from './Components/Newsletter';
import Card from './Components/Card';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Heading/>
      <Analytics/>
      <Newsletter/>
      <Card/>
      <Footer/>
    </div>
  );
}

export default App;
