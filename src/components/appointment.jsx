import React, { useState, useEffect } from "react";
const Appointment = () => {
   const [dates, setDates] = useState([]);
   const [times, setTimes] = useState([]);
   const [selectedMaster, setSelectedMaster] = useState("");
   const [formData, setFormData] = useState({
      name: "",
      phoneNumber: "",
      service: "",
      date: "",
      time: "",
      master: "",
   });

   useEffect(() => {
      const generateDates = () => {
         const options = [];
         const today = new Date();
         for (let i = 0; i < 30; i++) {
            const date = new Date(today);
            date.setDate(today.getDate() + i);
            const formattedDate = formatDate(date);
            options.push(formattedDate);
         }
         setDates(options);
      };

      const generateTimes = () => {
         const options = [];
         for (let hour = 10; hour <= 18; hour++) {
            for (let minute = 0; minute < 60; minute += 30) {
               const time = `${hour.toString().padStart(2, "0")}:${minute
                  .toString()
                  .padStart(2, "0")}`;
               options.push(time);
            }
         }
         setTimes(options);
      };

      generateDates();
      generateTimes();
   }, []);

   const formatDate = (date) => {
      const options = { day: "numeric", month: "numeric", year: "numeric" };
      return date.toLocaleDateString("ru-RU", options);
   };

   const handleMasterClick = (master) => {
      setSelectedMaster(master);
      setFormData({ ...formData, master: master });
   };

   const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         const response = await fetch(
            "https://chiksa-nails.pythonanywhere.com/appointment/",
            {
               method: "POST",
               headers: {
                  "Content-Type": "application/json",
               },
               body: JSON.stringify(formData),
            }
         );
         if (response.ok) {
            console.log("Appointment data sent successfully!");
            // Reset the form data
            setFormData({
               name: "",
               phoneNumber: "",
               service: "",
               date: "",
               time: "",
               master: "",
            });
            setSelectedMaster(""); // Reset selected master
            console.log(formData);
         } else {
            console.error(
               "Failed to send appointment data:",
               response.statusText
            );
         }
      } catch (error) {
         console.error("Error sending appointment data:", error.message);
      }
   };

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
                     {[
                        "Мастер Жанна",
                        "Мастер Асел",
                        "Мастер Айсел",
                        "Мастер Роза",
                        "Мастер Айназ",
                     ].map((master, index) => (
                        <button
                           key={index}
                           className={`picker ${
                              selectedMaster === master ? "active" : ""
                           }`}
                           onClick={() => handleMasterClick(master)}
                        >
                           {master}
                        </button>
                     ))}
                  </div>
                  <div className="form">
                     <div className="name">
                        <p>Имя и фамилия</p>
                        <input
                           type="text"
                           name="name"
                           value={formData.name}
                           onChange={handleInputChange}
                           placeholder=".."
                        />
                     </div>
                     <div className="number">
                        <p>Ваш номер телефона</p>
                        <input
                           type="text"
                           name="phoneNumber"
                           value={formData.phoneNumber}
                           onChange={handleInputChange}
                           placeholder=".."
                        />
                     </div>
                     <div className="zapis">
                        <div className="work-type">
                           <p>Услуга</p>
                           <input
                              type="text"
                              name="service"
                              value={formData.service}
                              onChange={handleInputChange}
                              placeholder="Что хотите сделать?"
                           />
                        </div>
                        <div className="date">
                           <p>Запись</p>
                           <select
                              name="date"
                              value={formData.date}
                              onChange={handleInputChange}
                           >
                              <option value="">Дата</option>
                              {dates.map((date, index) => (
                                 <option key={index} value={date}>
                                    {date}
                                 </option>
                              ))}
                           </select>
                           <select
                              name="time"
                              value={formData.time}
                              onChange={handleInputChange}
                           >
                              <option value="">Время</option>
                              {times.map((time, index) => (
                                 <option key={index} value={time}>
                                    {time}
                                 </option>
                              ))}
                           </select>
                        </div>
                     </div>
                  </div>
                  <img src="../../img/last.svg" alt="" />
                  <div className="btn-bg">
                     <button className="appointment-btn" onClick={handleSubmit}>
                        Записаться
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Appointment;
