import React from "react";

const AppointmentButton = ({ isVisible }) => {
   return isVisible ? (
      <a className={`nav-appointment ${isVisible ? "active" : ""}`} href="#appointment">
         Записаться
      </a>
   ) : null;
};

export default AppointmentButton;
