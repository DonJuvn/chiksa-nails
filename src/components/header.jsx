import React from "react";
const Header = () => {
   const scrollToSection = (id) => {
      const section = document.getElementById(id);
      section.scrollIntoView({ behavior: "smooth" });
   };

   return (
      <div id="Header">
         <div className="container">
            <div className="logo">
               <img src="../../img/logo.svg" alt="" />
            </div>
            <div className="navigation">
               <a href="#about">О салоне</a>
               <a href="#Masters">Мастера</a>
               <a href="#BestWorks">Лучшие работы</a>
               <a href="#Certificates">Сертификаты</a>
               <a href="#Footer">Контакты</a>
            </div>
            <a href="#appointment">Записаться</a>
         </div>
      </div>
   );
};

export default Header;
