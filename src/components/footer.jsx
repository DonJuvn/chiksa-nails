import React from "react";import Navigation from "./navigation";
import PhoneButton from "./phone-number";
import WhatsAppButton from "./whatsapp";
const Footer = () => {
   return (
      <div id="Contacts">
         <div className="container">
            <Navigation />
            <div className="contacts">
               <WhatsAppButton />
               <PhoneButton />
            </div>
               <p>Адрес: Тараз, Пушкина 154</p>
         </div>
      </div>
   );
};

export default Footer;
