import React from "react";
import strawberryTasca from "../assets/IMG/bakeryPhoto/strawberryTasca.png"
import blackBerryTasca from "../assets/IMG/bakeryPhoto/blackBerryTasca.png"
import chocoGirella from "../assets/IMG/bakeryPhoto/chocoGirella.png"
import chocoTasca from "../assets/IMG/bakeryPhoto/chocoTasca.png"
import conchigliaChoco from "../assets/IMG/bakeryPhoto/conchigliaChoco.png"
import conchigliaLatte from "../assets/IMG/bakeryPhoto/conchigliaLatte.png"
import sfogliatelle from "../assets/IMG/bakeryPhoto/sfogliatelle.png"
import treccia from "../assets/IMG/bakeryPhoto/treccia.png"
import bearClaw from "../assets/IMG/bakeryPhoto/bearClaw.png"


export default function PuffPastry() {

    const puffPastryImg = [
        {
            id: 1,
            src: strawberryTasca,
            title: "Blackberry Tasca"
        },
        {
            id: 2,
            src: chocoGirella,
            title: "Girella Nutella"
        },
        {
            id: 3,
            src: chocoTasca,
            title: "Chocolate Tasca"
        },
        {
            id: 4,
            src: conchigliaChoco,
            title: "Chocolate Shell"
        },
        {
            id: 5,
            src: conchigliaLatte,
            title: "Milk Shell"
        },
        {
            id: 6,
            src: sfogliatelle,
            title: "Sfogliatelle"
        },
        {
            id: 7,
            src: treccia,
            title: "Chocolate Chips Treccia"
        },
        {
            id: 8,
            src: blackBerryTasca,
            title: "Blackberry Tasca"
        },
        {
            id: 9,
            src: bearClaw,
            title: "Bear Claws"
        },
    ]


    return (
        <div className="bg-beige">
            <div className="flex flex-col items-center">
                <h1 className=" text-5xl font-bold text-gold pb-6">Puff Pastry</h1>
                <hr className="mb-10 border-t-1 border-amber-800 w-52 mx-auto" />
            </div>
            <div className="container mx-auto px-20">
             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-8 px-12">

                {
                    puffPastryImg.map(({id,src,title}) => (
                        <div key={id} className="flex flex-col items-center">
                            <img src={src} alt="" className=" w-60"/>
                            <p className="text-gold text-xl font-semibold">{title}</p>
                        </div>
                    ))
                }

             </div>
            </div>
        </div>
    )
}