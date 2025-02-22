import { useEffect, useState } from "react";
import almondPecan from "../assets/IMG/bakeryPhoto/almondPecan.jpg"
import almondApricot from "../assets/IMG/bakeryPhoto/almondApricot.jpg"
import almondFoglia from "../assets/IMG/bakeryPhoto/almondFoglia.jpg"
import almondNutella from "../assets/IMG/bakeryPhoto/almondNutella.jpg"
import almondPistacchio from "../assets/IMG/bakeryPhoto/almondPistacchio.jpg"
import almondPumpkin from "../assets/IMG/bakeryPhoto/almondPumpkin.jpg"
import almondRaspberry from "../assets/IMG/bakeryPhoto/almondRaspberry.jpg"
import almondStick from "../assets/IMG/bakeryPhoto/almondStick.jpg"
import datteri from "../assets/IMG/bakeryPhoto/datteri.jpg"
import funghetti from "../assets/IMG/bakeryPhoto/funghetti.jpg"
import biscotti from "../assets/IMG/bakeryPhoto/biscotti.png"

export default function AlmondCookies() {
    const cookieImg = [
        {
            id: 1,
            src: almondPecan,
            title: "Pecans Almond Cookie"
        },
        {
            id: 2,
            src: almondApricot,
            title: "Apricot Jam Almond Cookie"
        },
        {
            id: 3,
            src: almondFoglia,
            title: "Foglia Almond Cookie"
        },
        {
            id: 4,
            src: almondNutella,
            title: "Nutella Almond Cookie"
        },
        {
            id: 5,
            src: almondPistacchio,
            title: "Pistacchio Almond Cookie"
        },
        {
            id: 6,
            src: almondPumpkin,
            title: "Pumpkin Almond Cookie"
        },
        {
            id: 7,
            src: almondRaspberry,
            title: "Raspberry Jam Almond Cookie"
        },
        {
            id: 8,
            src: almondStick,
            title: "Almond Stick Cookie"
        },
        {
            id: 9,
            src: almondPecan,
            title: "Pecans"
        },
        {
            id: 10,
            src: datteri,
            title: "Dates Almond cookie"
        },
        {
            id: 11,
            src: funghetti,
            title: "Funghetti Almond Cookie"
        },
        {
            id: 12,
            src: biscotti,
            title: "Biscotti",
            title1: "Not gluten-Free"
        },
    ]

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            });
        });

        observer.observe(document.getElementById("almondCookies"));

        return () => observer.disconnect();
    }, []);

    return (
        <div name="Cookies" className="bg-beige">
        <div id="almondCookies" className={` opacity-0 ${isVisible ? 'transition-opacity duration-[2000ms] opacity-100' : ''}`}>
            <div className="flex flex-col items-center">
                <h1 className="text-5xl font-bold text-gold">Almond Cookies</h1>
                <p className="text-xl py-6 font-semibold text-amber-800">Gluten Free</p>
                <hr className="mb-10 border-t-1 border-amber-800 w-52 mx-auto" />
            </div>
            <div className="container mx-auto md:px-20 pb-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-8 md:px-12">
                    {cookieImg.map(({ id, src, title, title1 }) => (
                        <div key={id} className="flex flex-col items-center">
                            <img src={src} alt="" className="w-60 md:w-auto min-w-36 h-auto mx-auto rounded-xl" />
                            <p className="text-gold text-xl font-semibold mt-2">{title}</p>
                            {title1 && <p className="text-gold font-semibold">{title1}</p>}
                        </div>
                    ))}
                </div>
            </div>
        </div>

        </div>
    )
}
