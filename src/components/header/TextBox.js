import React from 'react';

function getDate() {
   const weekdayTrans = {
      0: "Sunday",
      1: "Monday",
      2: "Tuesday",
      3: "Wednesday",
      4: "Thursday",
      5: "Friday",
      6: "Saturday",
   };

   const monthTrans = {
      0: "January",
      1: "February",
      2: "March",
      3: "April",
      4: "May",
      5: "June",
      6: "July",
      7: "August",
      8: "September",
      9: "October",
      10: "November",
      11: "December",
   };

   const dayTrans = {
      1: '1st',
      2: '2nd',
      3: '3rd',
   }

   const weekday = weekdayTrans[new Date().getDay()];
   const day = new Date().getDate();
   const month = monthTrans[new Date().getMonth()];

   return `${weekday}, ${dayTrans[day] ? dayTrans[day] : `${day}th`} ${month}`;
}

const TextBox = () => (
   <div className="header__textbox">
      <h1 className="header__textbox__greetings">Hello,<br /> Stranger</h1>
      <p className="header__textbox__date">{ getDate() }</p>
   </div>
);

export default TextBox;