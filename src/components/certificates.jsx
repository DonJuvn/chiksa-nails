import React from "react";
const Certificates = () => {
   return (
      <div id="Certificates">
         <div className="container">
            <center>
               <h1 className="title">
                  <span>Бонусный сертификат</span>
               </h1>
               <p className="desc">
                  Порадуйте своих близких, друзей или коллег уникальным подарком
                  – бонусным сертификатом от нашего салона маникюра! Не знаете,
                  что подарить? Не беспокойтесь, мы возьмем на себя заботу о
                  создании незабываемого опыта для тех, кого вы цените.{" "}
                  <span>
                     Выберите подходящий вариант бонусного сертификата, который
                     соответствует вашим потребностям:
                  </span>
               </p>
            </center>

            <div className="certificates">
               <div className="certificate">
                  <div className="container">
                     <h3 className="title">Сертификат на маникюр</h3>
                     <p className="desc">
                        Полный спектр услуг по уходу за ногтями и кожей рук,
                        включая покрытие лаком или гель-лаком на ваш выбор.
                     </p>
                     <p className="price">7.990 KZT</p>
                  </div>
                  <div className="add">
                     <div className="add-bg">
                        <i className="fa-solid fa-plus"></i>
                     </div>
                  </div>
               </div>
               <div className="certificate">
                  <div className="container">
                     <h3 className="title">Сертификат на педикюр</h3>
                     <p className="desc">Уникальный опыт профессионального ухода за ногами, включая массаж и покрытие ногтей.</p>
                     <p className="price">17.990 KZT</p>
                  </div>
                  <div className="add">
                     <div className="add-bg">
                        <i className="fa-solid fa-plus"></i>
                     </div>
                  </div>
               </div>
               <div className="certificate">
                  <div className="container">
                     <h3 className="title">Комплексный сертификат</h3>
                     <p className="desc">Полный комплекс услуг по уходу за ногтями и руками, включая маникюр, педикюр и дополнительные процедуры по уходу за кожей.</p>
                     <p className="price">8.560 KZT</p>
                  </div>
                  <div className="add">
                     <div className="add-bg">
                        <i className="fa-solid fa-plus"></i>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Certificates;
