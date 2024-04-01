import React from "react";import { Link } from "react-router-dom";
import AppointmentButton from "./appointment-btn";
import Navigation from "./navigation";

const Header = () => {
   const scrollToSection = (id) => {
      const section = document.getElementById(id);
      section.scrollIntoView({ behavior: "smooth" });
   };

   return (
      <div id="Header">
         <div className="container">
            <div className="header">
               <div className="logo">
                  <Link to="/">
                     <img src="../../img/logo.svg" alt="" />
                  </Link>
               </div>
               <Navigation />
               <AppointmentButton />
            </div>
         </div>
      </div>
   );
};

export default Header;
