import React from "react";
import menu from "../assets/IMG/menu.png"
import menu2 from "../assets/IMG/menu2.png"



export default function Menu() { 
    return (
        <div className="bg-beige">
            <div className="flex flex-col items-center">
                <h1 className="text-5xl text-gold font-bold mb-10">Pizza Menu</h1>
                <hr className="mb-10 border-t-1 border-amber-800 w-52 mx-auto" />
            </div>
            <div className="flex flex-col justify-center md:flex-row md:justify-center">
                <img src={menu} alt=""
                    className="w-96 border-4 border-gold mb-5 md:mr-5 md:mb-0" />

                <img src={menu2} alt=""
                    className="w-96 border-4 border-gold" />
            </div>
         </div>
    )
}
