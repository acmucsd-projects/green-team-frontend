import React from 'react';

import ACMLogo from '../../assets/acm.svg';
import MenuButtonIcon from '../../assets/menubutton.svg';
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
  };

  return (
    <div className="fixed-nav">
      <div className="navbar-div">
        <ul className="navbar">
          <li>
            <Link to="/">
              <img src={ACMLogo} alt="ACM Logo" />
            </Link>
          </li>
          <li>
            <a
              href="https://members.acmucsd.com/login"
              className="login-button"
            >
              Admin
            </a>
          </li>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About Us</li>
          </Link>
          <Link to="/leaderboard">
            <li>Leaderboard</li>
          </Link>
          <Link to="/">
            <li>Glossary</li>
          </Link>
        </ul>
      </div>
      <div className="navbar-mobile-div">
        <div className="navbar-mobile">
          <img src={ACMLogo} alt="ACM Logo" />
          <a href="javascript:void(0);" className="icon" onClick={toggleMenu}>
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
        <ul className="navbar">
          <li>
            <img src={ACMLogo} alt="ACM Logo" />
          </li>
          <li>
            <a
              href="https://members.acmucsd.com/login"
              className="login-button"
            >
              Admin
            </a>
          </li>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About Us</li>
          </Link>
          <Link to="/leaderboard">
            <li>About Us</li>
          </Link>
          <Link to="/">
            <li>Glossary</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
