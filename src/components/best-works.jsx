import React from "react";
const BestWorks = () => {
   return (
      <div id="BestWorks">
         <div className="container">
            <center>
               <h1 className="title">
                  <span>Лучшие работы</span>
               </h1>
               <p className="desc">
                  В Chiksa, мы гордимся нашей командой талантливых и опытных
                  мастеров маникюра. Каждый из наших специалистов не только
                  обладает высоким уровнем профессионализма, но и истинной
                  страстью к своему делу. Встречайте наших работы:
               </p>
            </center>

            <div className="works">
               <div className="work">
                  <img className="logotype" src="../../img/chiksa.svg" alt="" />
                  <div className="work-img">
                     <img src="../../img/work1.svg" alt="" />
                  </div>
                  <div className="work-info">
                     <p className="information">Мастер Асел</p>
                  </div>
               </div>
               <div className="work">
                  <img className="logotype" src="../../img/chiksa.svg" alt="" />
                  <div className="work-img">
                     <img src="../../img/work2.svg" alt="" />
                  </div>
                  <div className="work-info">
                     <p className="information">Мастер Жанна</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default BestWorks;
