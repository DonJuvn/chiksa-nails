import React from "react";import AppointmentButton from "./appointment-btn";
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
                  <img src="../../img/logo.svg" alt="" />
               </div>
               <div className="navigation">
                  <a href="#about">О салоне</a>
                  <a href="#Masters">Мастера</a>
                  <a href="#BestWorks">Работы</a>
                  <a href="#Certificates">Сертификаты</a>
                  <a href="#Contacts">Контакты</a>
               </div>
               {/* <a className="nav-appointment" href="#appointment">
                  Записаться
               </a> */}
               <AppointmentButton/>
            </div>
         </div>
      </div>
   );
};

export default Header;
