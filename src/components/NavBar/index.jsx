import React from 'react';

import ACMLogo from '../../assets/acm.svg';
import MenuButtonIcon from '../../assets/menubutton.svg'
import CloseMenuButton from '../../assets/closemenubutton.svg';
import { Link } from 'react-router-dom';
import './style.css';

const NavBar = () => {
  const [menuState, setMenuState] = React.useState(false);
  const toggleMenu = () => {
    const menuIcon = document.getElementsByClassName('menuicon')[0];
    const mobileLinks = document.getElementsByClassName('mobile-links')[0];
    if (menuState) {
      menuIcon.src = MenuButtonIcon;
      mobileLinks.style.display = 'none';
      setMenuState(false);
    } else {
      menuIcon.src = CloseMenuButton;
      mobileLinks.style.display = 'block';
      setMenuState(true);
    }
  }

  return (
    <div className="fixed-nav">
      <div className="navbar-div">
        <ul className="navbar">
          <li><img src={ACMLogo} alt="ACM Logo" /></li>
          <li><a href="https://members.acmucsd.com/login" className="login-button">Login</a></li>
          <li>Sponsorship</li>
          <li>About Us</li>
        </ul>
      </div>
      <div className="navbar-mobile-div">
        <div className="navbar-mobile">
          <img src={ACMLogo} alt="ACM Logo" />
          <a href="javascript:void(0);" className="icon" onClick={toggleMenu} >
            <img className="menuicon" src={MenuButtonIcon} alt="Menu Icon" />
          </a>
        </div>
      </div>
      <div className="wainbow">
        <span className="pinkFill" />
        <span className="greenFill" />
        <span className="cyanFill" />
        <span className="purpleFill" />
        <span className="orangeFill" />
      </div>
      <div className="mobile-links">
        About Us
        Sponsorship
        <a href="https://members.acmucsd.com/login">Login</a>
      </div>
    </div>
  );
}

export default NavBar;