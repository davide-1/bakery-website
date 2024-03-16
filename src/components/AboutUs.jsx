import React from "react";


export default function AboutUs() {
//     <div className="flex justify-center">
//     <div className="top-bar bg-amber-800 h-1 w-10 mb-10"></div>
// </div>

    return (
        <div className=" relative mx-auto lg:px-80 px-10 text-center mb-20">
            <div>
                <h1 className="text-5xl font-semibold text-gold mb-5">Our Bakery</h1>
                <p className=" text-lg font-semibold text-amber-800">A Sicilian Dream in Santa Cruz</p>
                <hr className="mb-10 mt-2 border-t-1 border-amber-800 w-10 mx-auto" />
            </div>
            <div>
                <p className="font-semibold text-amber-800">
                    In 2015, the La Placa family embarked on a journey across the Atlantic, leaving behind the sun kissed shores of Sicily. Leonardo led the way with his wife Antonella and their three children, Davide, Debora, and Gabriele.
                </p>
                <br />
                <p className="font-semibold text-amber-800">
                    From the moment they set foot in Santa Cruz, the La Placas were captivated by its natural beauty and vibrant energy. The rolling hills, the scent of the ocean breeze, and the warmth of the community reminded them of home in Palermo.
                </p>
                <br />
                <p className="font-semibold text-amber-800">
                    One sunny afternoon in 2017, Leonardo stumbled upon Ben Lomond Bakery nestled in the mountains of Santa Cruz. Instantly captivated by its charm, he envisioned transforming the bakery into a haven where the essence of Sicilian culinary heritage would come alive.
                </p>
                <br />
                <p className="font-semibold text-amber-800">
                    And so, Ben Lomond Bakery became La Placa Family Bakery, a beacon of Sicilian charm amidst the rugged beauty of Santa Cruz mountain.
                </p>
            </div>
        </div>
    )
}