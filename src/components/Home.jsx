import React from "react";
import dessert from "../assets/IMG/dessert.png"
// import cheesecake from "../assets/IMG/cheesecake.png"
import puffPastry from "../assets/IMG/puffPastry.png"
import croissants from "../assets/IMG/croissants.png"



export default function Home() {
    return (
        <div className="bg-beige">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center md:justify-start max-w-6xl mx-auto px-4 p-5">
                <div className="mb-8">
                    <img src={dessert} alt="" className="object-cover max-w-96 h-auto mx-auto md:mx-0" />
                </div>
                <div className="text-center md:text-left">
                    <h2 className="text-4xl sm:text-7xl text-gold font-bold mb-4">YOUR ITALIAN BAKERY PIZZERIA </h2>
                    <p className="text-lg sm:text-2xl font-bold text-amber-800">Indulge in the perfect blend of flavors where every slice and sip brings joy to your day</p>
                </div>
            </div>
            <div className="flex justify-center">
                {/* <img src={cheesecake} alt="" className=" w-80" /> */}
                <img src={puffPastry} alt="" className=" w-80" />
                <img src={croissants} alt="" className=" w-80" />
            </div>
            <div className="flex justify-center p-10">
                {/* <img src={cheesecake} alt="" className=" w-80" /> */}
                <img src={puffPastry} alt="" className=" w-80" />
                <img src={croissants} alt="" className=" w-80" />
            </div>
        </div>
    )
}

