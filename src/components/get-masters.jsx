import React, { useState, useEffect } from "react";

const MyComponent = () => {
   const [masters, setMasters] = useState([]);

   useEffect(() => {
      fetch("https://chiksa.pythonanywhere.com/api/masters/")
         .then((response) => response.json())
         .then((data) => {
            setMasters(data);
         })
         .catch((error) => {
            console.error("Error fetching data:", error);
         });
   }, []);

   return (
      <div>
         <h1>Masters</h1>
         <ul>
            {masters.map((master) => (
               <li key={master.id}>
                  <h2>{master.title}</h2>
                  <p>{master.description}</p>
                  <img src={master.photo} alt="" />
                  <p>Experience Years: {master.experience_years}</p>
                  <p>Profession: {master.profession}</p>
                  <p>Contacts: {master.contacts}</p>
                  <p>
                     Services:{" "}
                     {master.services
                        .map((service) => service.title)
                        .join(", ")}
                  </p>
                  {master.reviews && (
                     <div>
                        <h3>Reviews:</h3>
                        <ul>
                           {master.reviews.map((review) => (
                              <li key={review.id}>
                                 <p>Rating: {review.rating}</p>
                                 <p>Comment: {review.comment}</p>
                                 <p>Created At: {review.created_at}</p>
                              </li>
                           ))}
                        </ul>
                     </div>
                  )}
               </li>
            ))}
         </ul>
      </div>
   );
};

export default MyComponent;
