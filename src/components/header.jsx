import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppointmentButton from "./appointment-btn";
import Navigation from "./navigation";

const Header = () => {
   const [isMenuOpen, setMenuOpen] = useState(false);

   const toggleMenu = () => {
      setMenuOpen(!isMenuOpen);
   };

   return (
      <div id="Header">
         <div className="container">
            <div className={`header ${isMenuOpen ? "active" : ""}`}>
               <div className="logo">
                  <Link to="/">
                     <img src="../../img/logo.svg" alt="" />
                  </Link>
               </div>
               <i id='burger' onClick={toggleMenu} class="fa-solid fa-bars"></i>
               <Navigation isOpen={isMenuOpen} />
               <AppointmentButton isVisible={isMenuOpen} />
            </div>
         </div>
      </div>
   );
};

export default Header;
