import React from "react";const Appointment = () => {
   return (
      <div id="appointment">
         <div className="container">
            <div className="appointment-section">
               <div className="container">
                  <h3>
                     Забронируйте свой визит сегодня и{" "}
                     <span>позвольте нам позаботиться о вашей красоте</span> с
                     наивысшим уровнем профессионализма и заботы.
                  </h3>
                  <div className="pick-masters">
                     <button className="picker">Мастер Жанна</button>
                     <button className="picker">Мастер Асел</button>
                     <button className="picker">Мастер Айсел</button>
                     <button className="picker">Мастер Роза</button>
                     <button className="picker">Мастер Айназ</button>
                  </div>
                  <div className="form">
                     <div className="name">
                        <p>Имя и фамилия</p>
                        <input type="text" placeholder=".." />
                     </div>
                     <div className="number">
                        <p>Ваш номер телефона</p>
                        <input type="text" placeholder=".." />
                     </div>
                     <div className="work-type">
                        <p>Услуга</p>
                        <input type="text" placeholder="Что хотите сделать?" />
                     </div>
                  </div>
                  <img src="../../img/last.svg" alt="" />
                  <div className="btn-bg">
                     <button className="appointment-btn">Записаться</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Appointment;
