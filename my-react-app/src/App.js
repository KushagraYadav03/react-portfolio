import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Experience from './Components/Experience';
import Projects from './Components/Project'; 
import Skills from './Components/Skills'; 
import Contact from './Components/Contact';


const App = () => {
 

  const [menuStatus, setMenuStatus] = useState(false);

  const toggleMenu = () => {
    setMenuStatus(!menuStatus);
  };

  return (
    <>
      <Navbar />
      <button className='micon' onClick={toggleMenu}>
        {menuStatus ? <span>&times;</span> : <span>&#9776;</span>}
      </button>
      <div className={`menu ${menuStatus ? 'activeMenu' : ''}`}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Course</li>
          <li>Gallery</li>
          <li>Contact us</li>
        </ul>
      </div>
      <Home />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
