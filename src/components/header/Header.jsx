import React from 'react';
import './header.css';
import CTA from './CTA';
import me from '../../assets/me-new.png';
import HeaderSocials from './HeaderSocials';
import Typed from 'react-typed';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Namaste, I'm</h5>
        <h1>Aayush Anil Mishra and I'm a </h1>
        <Typed
          className="text-light"
          strings={[
            "Robotics Engineer",
            "Aspiring Full-Stack Developer",
            "Avid Astronomer"
          ]}
          typeSpeed={50}
          backSpeed={30}
          loop
        />
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={me} alt="me" />
        </div>
        <a href="#contacts" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  );
};

export default Header;
