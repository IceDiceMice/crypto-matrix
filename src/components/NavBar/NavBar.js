import React from "react";
import "./navbar.scss";
import Button from "../Button/Button";
import logo from '../../assets/logo-long-red.gif'

const NavBar = () => {
  const scrollIntoSection = () => {
      document.getElementById('tariffs').scrollIntoView({
        behavior: 'smooth'
      });
  }
  const navbuttons = {
    color: "#FFFFFF",
    background: "none",
    padding: "10px 24px",
  };
  const joinbutton = {
    border: "1px solid #FFFFFF",
    background: "none",
    color: "#FFFFFF",
    padding: "10px 24px",
    width: "204px",
    height: "54px",
  };
  return (
    <nav>
      <div className='navbar'>
        <div className='logo'>
          <img src={logo} />
        </div>
        <div className='navbar-buttons'>
          <Button style={navbuttons}>ПРОГРАМИ</Button>
          <Button style={navbuttons}><span onClick={scrollIntoSection}>ТАРИФИ</span></Button>
          <Button style={navbuttons}><span>ЧАПИ</span></Button>
          <Button style={joinbutton}>ПРИЄДНАТИСЬ</Button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
