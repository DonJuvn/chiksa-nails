import React from "react";
import Appointment from "./appointment";
import AppointmentButton from "./appointment-btn";
const CallToAction = () => {
   return (
      <div id="CallToAction">
         <div className="container">
            <div className="call-to-action">
               <center>
                  <h1 id="call-to-action" className="title">
                     Ваше исключительное приглашение в{" "}
                     <span>мир красоты и ухода за собой</span>
                  </h1>
                  <p className="desc">
                     Добро пожаловать в Chiksa — где каждый маникюр превращается
                     в шедевр, а уход за собой становится настоящим искусством.
                     Мы верим, что красивые руки начинаются с идеального
                     маникюра, и наша миссия — сделать каждый ваш визит
                     незабываемым.
                  </p>
               </center>
               <div className="calls">
                  <div className="call">
                     <div className="container">
                        <h1>Высшее качество материалов</h1>
                        <p>
                           Мы используем только проверенные и безопасные
                           материалы ведущих брендов, гарантируя долговечность и
                           красоту вашего маникюра.
                        </p>
                        <AppointmentButton />
                     </div>
                     <img src="../../img/cta1.svg" alt="" />
                  </div>
                  <div className="call">
                     <div className="container">
                        <h1>Индивидуальный подход</h1>
                        <p>
                           Наша команда профессионалов подберет идеальный уход и
                           дизайн, соответствующий вашему стилю и желаниям.
                        </p>
                        <AppointmentButton />
                     </div>
                     <img src="../../img/cta2.svg" alt="" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default CallToAction;
