import React from "react";
import AppointmentButton from "./appointment-btn";
import PhoneButton from "./phone-number";

const About = () => {
   return (
      <div id="about">
         <div className="container">
            <div className="about">
               <div className="info">
                  <h1>
                     Маникюр, который подчеркнет <span>вашу уникальность!</span>
                  </h1>
                  <p>
                     Добро пожаловать в Chiksa — где каждый маникюр превращается
                     в шедевр, а уход за собой становится настоящим искусством.
                     Мы верим, что красивые руки начинаются с идеального
                     маникюра, и наша миссия — сделать каждый ваш визит
                     незабываемым.
                  </p>
                  <div className="actions">
                     <AppointmentButton />
                     <PhoneButton />
                  </div>
               </div>
               <div className="smm">
                  <a href="#">
                     WhatsApp <img src="../../img/link.svg" alt="" />
                  </a>
                  <a href="#">
                     Instagram <img src="../../img/link.svg" alt="" />
                  </a>
                  <a href="#">
                     TikTok <img src="../../img/link.svg" alt="" />
                  </a>
                  <a href="#">
                     Telegram <img src="../../img/link.svg" alt="" />
                  </a>
               </div>
               <img className='main-woman' src="../../img/main-woman.svg" alt="" />
            </div>
         </div>
      </div>
   );
};

export default About;
