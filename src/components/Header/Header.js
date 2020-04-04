import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
   return (
      <div className="container-flued header">
         <div className="row">
            <a className="logo" href=""><img src={logo} alt="logo"/></a>
         </div>
         <div className="row d-flex justify-content-center main_menu">
            <nav className="navbar navbar-expand-lg justify-content-center">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse x_menu text-center" id="navbarNav">
               <ul className="navbar-nav ">
                  <li className="nav-item active">
                  <a className="nav-link" href="">Home <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                  <a className="nav-link" href="">Features</a>
                  </li>
                  <li className="nav-item">
                  <a className="nav-link" href="">Pricing</a>
                  </li>
               </ul>
            </div>
         </nav>
         </div>
      </div>
   );
};

export default Header;