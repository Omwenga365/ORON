import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import Programs from './components/Programs/Programs';
import GetInvolved from './components/GetInvolved/GetInvolved';
import Footer from './components/Footer/Footer'; // Verify this path matches your project structure

function App() {
  return (
    <div className="App"> 
      <header className="App-header">
        <nav className="navbar">
          <div className="container">
            <a href="#" className="logo">ORON</a>
            <ul className="nav-menu">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#programs">Programs</a></li>
              <li><a href="#get-involved">Get Involved</a></li>
              {/* Add more navigation links as needed */}
            </ul>
          </div>
        </nav>
      </header>
      
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <AboutUs />
        </section>
        <section id="programs">
          <Programs />
        </section>
        <section id="get-involved">
          <GetInvolved />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
