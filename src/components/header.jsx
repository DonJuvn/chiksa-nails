import React from "react";import { Link } from "react-router-dom";
import AppointmentButton from "./appointment-btn";

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
               <div className="navigation">
                  <a href="#about">О салоне</a>
                  <a href="#Masters">Мастера</a>
                  <a href="#BestWorks">Работы</a>
                  <a href="#Certificates">Сертификаты</a>
                  <a href="#Contacts">Контакты</a>
               </div>
               <AppointmentButton />
            </div>
         </div>
      </div>
   );
};

export default Header;
