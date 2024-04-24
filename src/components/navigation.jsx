// import React from "react";import "../App.css";

const Navigation = ({ isOpen }) => {
   return (
      <div className={`navigation ${isOpen ? "active" : ""}`}>
         <a href="#about">О салоне</a>
         <a href="#Masters">Мастера</a>
         <a href="#BestWorks">Работы</a>
         <a href="#Certificates">Сертификаты</a>
         <a href="#Contacts">Контакты</a>
      </div>
   );
};

export default Navigation;
