import React, { useRef, useEffect, useState } from "react";
import menu from "../assets/IMG/menu.png";
import menu2 from "../assets/IMG/menu2.png";

export default function Menu() {
    const menuRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            });
        });

        observer.observe(menuRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div className="bg-beige">
        <div ref={menuRef} className={` pb-20 opacity-0 ${isVisible ? 'transition-opacity duration-[2000ms] opacity-100' : ''}`}>
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

        </div>
    )
}
