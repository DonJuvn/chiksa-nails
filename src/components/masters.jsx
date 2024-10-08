import React from "react";
const Masters = () => {
   return (
      <div id="Masters">
         <div className="container">
            <center>
               <h1 className="title">
                  <span>Наши Мастерa</span>
               </h1>
               <p className="desc">
                  В Chiksa, мы гордимся нашей командой талантливых и опытных
                  мастеров маникюра. Каждый из наших специалистов не только
                  обладает высоким уровнем профессионализма, но и истинной
                  страстью к своему делу. Встречайте наших звезд:
               </p>
            </center>
            <div className="masters">
               <div className="master">
                  <div className="img-bg">
                     <img src="../../img/master1.png" alt="" />
                  </div>
                  <h3 className="name">Мастер Асель</h3>
                  <p className="experience">2 года</p>
               </div>
               <div className="master">
                  <div className="img-bg">
                     <img src="../../img/master2.png" alt="" />
                  </div>
                  <h3 className="name">Мастер Асель</h3>
                  <p className="experience">2 года</p>
               </div>
               <div className="master">
                  <div className="img-bg">
                     <img src="../../img/master3.png" alt="" />
                  </div>
                  <h3 className="name">Мастер Асель</h3>
                  <p className="experience">2 года</p>
               </div>
               <div className="master">
                  <div className="img-bg">
                     <img src="../../img/master4.png" alt="" />
                  </div>
                  <h3 className="name">Мастер Асель</h3>
                  <p className="experience">2 года</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Masters;
