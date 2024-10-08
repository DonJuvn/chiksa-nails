import React from "react";
const Features = () => {
   return (
      <div id="Features">
         <div className="container">
            <center>
               <h1 className="title">
                  <span>Почему Выбирают Нас?</span>
               </h1>
               <p className="desc">
                  В Chiksa мы не просто делаем маникюр — мы заботимся о красоте
                  и здоровье ваших ногтей. Мы постоянно следим за последними
                  тенденциями в индустрии красоты, чтобы предложить вам самые
                  актуальные и стильные решения. Наша команда — это
                  сертифицированные мастера, которые подарят вам не только
                  красивый маникюр, но и заряд положительных эмоций.
               </p>
            </center>
            <div className="features">
               <div className="feature">
                  <img src="../../img/feature1.svg" alt="" />
                  <p>10 лет на рынке Казахстана</p>
               </div>
               <div className="divider"></div>
               <div className="feature">
                  <img src="../../img/feature2.svg" alt="" />
                  <p>Более 5000+ довольных клиентов</p>
               </div>
               <div className="divider"></div>
               <div className="feature">
                  <img src="../../img/feature3.svg" alt="" />
                  <p>Опытные мастера из Дубая</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Features;
