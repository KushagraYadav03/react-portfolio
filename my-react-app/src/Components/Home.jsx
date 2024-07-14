import React, { useRef, useEffect } from 'react';
import pdf from '../pdf/resume.pdf'; // Adjust path as necessary
import hero from './data/hero.json'; // Adjust path as necessary
import Typed from "typed.js";

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my profile",
        "My Name is Kushagra Yadav",
        "I'm a full stack developer",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="container home" id="home">
      <div className="left">
        <h1 ref={typedRef}></h1>
        <a href={pdf} download="Resume.pdf" className="btn btn-outline-warning">Download Resume</a>
      </div>
      <div className="right">
        <div className="img">
          {/* Use template literals for dynamic image source */}
          <img src={`/assets/${hero.imgSrc}`} alt="Hero" />
        </div>
      </div>
    </div>
  );
};

export default Home;
