import { useEffect, useState } from "react";
import hazelnutPassion from "../assets/IMG/bakeryPhoto/hazelnutPassion.png"
import mixedBerry from "../assets/IMG/bakeryPhoto/mixedBerry.jpg"
import monterosa from "../assets/IMG/bakeryPhoto/monterosa.jpg"
import ricottaPistacchio from "../assets/IMG/bakeryPhoto/ricottaPistacchio.jpg"
import setteveli from "../assets/IMG/bakeryPhoto/setteveli.png"
import threeChocoCup from "../assets/IMG/bakeryPhoto/threeChocoCup.jpg"
import tiramisuCup from "../assets/IMG/bakeryPhoto/tiramisuCup.png"
import eclair from "../assets/IMG/bakeryPhoto/eclair.png"
import tortaNonna from "../assets/IMG/bakeryPhoto/tortaNonna.jpg"
import lemonBar from "../assets/IMG/bakeryPhoto/lemonBar.jpg"





export default function Cake() {

    const cakeImg = [
        {
            id: 1,
            src: hazelnutPassion,
            title: "Hazelnut Passion"
        },
        {
            id: 2,
            src: mixedBerry,
            title: "MixedBerry"
        },
        {
            id: 3,
            src: monterosa,
            title: "Monterosa"
        },
        {
            id: 4,
            src: ricottaPistacchio,
            title: "Ricotta Pistacchio"
        },
        {
            id: 5,
            src: setteveli,
            title: "Setteveli"
        },
        {
            id: 6,
            src: threeChocoCup,
            title: "Three Chocolate Cup"
        },
        {
            id: 7,
            src: tiramisuCup,
            title: "Tiramisu Cup"
        },
        {
            id: 8,
            src: tortaNonna,
            title: "Torta Della Nonna"
        },
        {
            id: 9,
            src: lemonBar,
            title: "Lemon Bar"
        },
        {
            id: 10,
            src: eclair,
            title: "Chocolate Eclair"
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

        observer.observe(document.getElementById("cakeImg"));

        return () => observer.disconnect();
    }, []);


    return (
        <div className="bg-beige">
        <div id="cakeImg" className={` pt-10 pb-20 opacity-0 ${isVisible ? 'transition-opacity duration-[2000ms] opacity-100' : ''}`}>
            <div className="flex flex-col items-center">
                <h1 className=" text-5xl font-bold text-gold pb-6">Cake</h1>
                <hr className="mb-10 border-t-1 border-amber-800 w-52 mx-auto" />
            </div>
            <div className="container mx-auto md:px-20">
             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-8 md:px-12">

                {
                    cakeImg.map(({id,src,title}) => (
                        <div key={id} className="flex flex-col items-center">
                            <img src={src} alt="" className="w-60 h-60 md:w-auto min-w-36 mx-auto rounded-xl"/>
                            <p className="text-gold text-xl font-semibold mt-2">{title}</p>
                        </div>
                    ))
                }

             </div>
            </div>
        </div>

        </div>
    )
}