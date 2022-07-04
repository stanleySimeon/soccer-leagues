import React from 'react';
import { Link } from 'react-router-dom';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fas);

const Navbar = () => (
  <nav className="navbar navbar-expand-sm navbar-dark d-flex bg-dark fixed-top">
    <div className="container-fluid">
      <Link className="navbar-brand me-2" to="/">
        <FontAwesomeIcon icon="fa-solid fa-chevron-left" className="icon" />

      </Link>
      <span className="navbar-brand mb-0 h1">SOCCER TEAM</span>
      <div className="d-flex">
        <ul className="navbar-nav d-flex" id="mic_gear">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              <FontAwesomeIcon icon="fa-solid fa-microphone" className="icon" />
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              <FontAwesomeIcon icon="fa-solid fa-gear" className="icon" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);
export default Navbar;
