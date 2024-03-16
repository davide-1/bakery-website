import React from "react";


export default function BusinessHours() {
 
    const businessHours = [
        {day: "Monday", hours: "Closed"},
        {day: "Tuesday", hours: "7:00 AM - 8:00 PM"},
        {day: "Wednesday", hours: "7:00 AM - 8:00 PM"},
        {day: "Thursday", hours: "7:00 AM - 8:00 PM"},
        {day: "Friday", hours: "7:00 AM - 8:00 PM"},
        {day: "Saturday", hours: "7:00 AM - 8:00 PM"},
        {day: "Sunday", hours: "7:00 AM - 8:00 PM"},
    ];


    return (
        <div className="">
          <h2 className="text-3xl font-semibold mb-8 text-gold">Business Hours</h2>
          <ul>
            {businessHours.map((item, index) => (
              <li key={index} className="mb-2 flex justify-between text-amber-800 font-semibold">
                <span className="mr-4 font-semibold">{item.day}:</span>
                <span className="">{item.hours}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    };





