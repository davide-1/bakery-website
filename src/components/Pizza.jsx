import { useEffect, useState } from "react";
import cheesePizza from "../assets/IMG/bakeryPhoto/cheesePizza.jpg"
import facciaDiVecchia from "../assets/IMG/bakeryPhoto/facciaDiVecchia.jpg"
import fourCheese from "../assets/IMG/bakeryPhoto/fourCheese.jpg"
import laPlacaCombination from "../assets/IMG/bakeryPhoto/laPlacaCombination.jpg"
import rustica from "../assets/IMG/bakeryPhoto/rustica.jpg"
import sanDaniele from "../assets/IMG/bakeryPhoto/sanDaniele.jpg"
import vegetarian from "../assets/IMG/bakeryPhoto/vegetarian.jpg"


export default function Pizza() {

    const pizzaImg = [
        {
            id: 1,
            src: cheesePizza,
            title: "Cheese Pizza"
        },
        {
            id: 2,
            src: facciaDiVecchia,
            title: "Faccia Di Vecchia"
        },
        {
            id: 3,
            src: fourCheese,
            title: "Four Cheese"
        },
        {
            id: 4,
            src: laPlacaCombination,
            title: "La Placa Combination"
        },
        {
            id: 5,
            src: rustica,
            title: "Rustica"
        },
        {
            id: 6,
            src: sanDaniele,
            title: "San Daniele"
        },
        {
            id: 7,
            src: vegetarian,
            title: "Vegetarian"
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

        observer.observe(document.getElementById("pizzaImg"));

        return () => observer.disconnect();
    }, []);


    return (
        <div className="bg-beige">
        <div id="pizzaImg" className={` pt-10 opacity-0 ${isVisible ? 'transition-opacity duration-[2000ms] opacity-100' : ''}`}>
            <div className="flex flex-col items-center">
                <h1 className=" text-5xl font-bold text-gold pb-6">Pizza</h1>
                <hr className="mb-10 border-t-1 border-amber-800 w-52 mx-auto" />
            </div>
            <div className="container mx-auto md:px-20">
             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-8 md:px-12">

                {
                    pizzaImg.map(({id,src,title}) => (
                        <div key={id} className="flex flex-col items-center">
                            <img 
                            src={src} 
                            alt={title} 
                            loading="lazy"
                            className="w-60 md:w-auto min-w-36 h-auto mx-auto rounded-xl"
                            onLoad={(e) => e.currentTarget.classList.add("opacity-100")}
                            />
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