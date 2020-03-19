import React from 'react';
import '../App.css';
import logo from '../images/logo_small.svg';
import resume from '../data/Resume.pdf';

function Header() {
  return (
    <div>
        <div className="container navigation">
            <nav className="navbar navbar-expand-sm navbar-light bg-light fixed-top mr-auto">
                <a className="navbar-brand" href="index.html">
                    <img className="img-fluid logo" src={logo} alt='' /> {/* size should equal 153h x 48w */}
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link links" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link links" href="https://github.com/SAS0588" target="_blank" rel="noopener noreferrer">Github</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link links" href={resume} target="_blank" rel="noopener noreferrer">Resum&eacute; </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link links" href="#email">Contact Me</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
  );
}

export default Header;
