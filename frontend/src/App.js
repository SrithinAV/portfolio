import './index.css';
import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar.jsx';
import Header from './components/header/Header';
import About from './components/about/About';
import Services from './components/services/Services';
import Projects from './components/projects/Projects';
import Chat from './components/gemini/Chat';
import InterfaceGemini from './components/gemini/Interface';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';


function App() {
  const [showInterface, setShowInterface] = useState(false);
  const url = "https://portfolio-backend-deploy.adaptable.app/";
  return (
    <div className="App">
       
      <Chat showInterface={showInterface}  setShowInterface={setShowInterface} />
      <InterfaceGemini showInterface={showInterface} setShowInterface={setShowInterface} url={url} />
      <Navbar />
      <Header />
     
     <About />
     <Services />
     <Projects />
     <Contact url={url}/>
    
    </div>
  );
}

export default App;
