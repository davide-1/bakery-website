

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/IMG/logo.png"


export default function NavBar() {
    const [navVisible, setNavVisible] = useState(true);
    const [nav, setNav] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            const isTop = window.scrollY < 100;
            if (isTop !== navVisible) {
                setNavVisible(isTop);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [navVisible]);



    return (
        <div className="bg-beige">
            <div>
                <img src={logo} alt="" className="w-full" />
            </div>
            <nav className=" flex flex-col items-center justify-center h-20 text-2xl">
                <ul className="hidden md:flex gap-6 text-white capitalize font-medium p-4 mb-28">
                    <li className="hover:scale-105 duration-200 hover:text-gold">
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li className="hover:scale-105 duration-200 hover:text-gold">
                        <Link to="/menu">
                            Pizza Menu
                        </Link>
                    </li>
                    <li className="hover:scale-105 duration-200 hover:text-gold">
                        <Link to="/photoGallery">
                            Photo Gallery
                        </Link>
                    </li>
                    <li className="hover:scale-105 duration-200 hover:text-gold">
                        <Link to="/contactUs">
                            Contact Us
                        </Link>
                    </li>
                    <li className="hover:scale-105 duration-200 hover:text-gold">
                        <Link to="/aboutUs">
                            About Us
                        </Link>
                    </li>
                    <li className="hover:scale-105 duration-200 hover:text-gold">
                        <a href="https://www.ubereats.com/store/la-placa-family-bakery/lIWfbz8IWwCKe9GfmXGgEQ?diningMode=DELIVERY&sc=SEARCH_SUGGESTION" target="_blank" rel="noopener noreferrer">
                            Online Order
                        </a>
                    </li>

                </ul>
                <div
                    onClick={() => setNav(!nav)}
                    className="cursor-pointer z-10 md:hidden"
                >
                    {nav ? <FaTimes size={30} className="absolute top-0 right-0 mt-4 mr-4 text-amber-800 hover:text-gold" /> : <FaBars size={30} className="text-amber-800 hover:text-gold" />}
                </div>

                {nav && (
                    <ul className={`flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-beige text-amber-800 ${nav ? 'fade-in' : ''}`}>
                        <li className="px-4 cursor-pointer py-6 text-4xl hover:text-gold">
                            <Link onClick={() => setNav(!nav)} to="/">
                                Home
                            </Link>
                        </li>
                        <li className="px-4 cursor-pointer py-6 text-4xl hover:text-gold">
                            <Link onClick={() => setNav(!nav)} to="/menu">
                                Menu
                            </Link>
                        </li>
                        <li className="px-4 cursor-pointer py-6 text-4xl hover:text-gold">
                            <Link onClick={() => setNav(!nav)} to="/photoGallery">
                                Photo Gallery
                            </Link>
                        </li>
                        <li className="px-4 cursor-pointer py-6 text-4xl hover:text-gold">
                            <Link onClick={() => setNav(!nav)} to="/contactUs">
                                Contact Us
                            </Link>
                        </li>
                        <li className="px-4 cursor-pointer py-6 text-4xl hover:text-gold">
                            <Link onClick={() => setNav(!nav)} to="/aboutUs">
                                About Us
                            </Link>
                        </li>
                        <li className="px-4 cursor-pointer py-6 text-4xl hover:text-gold">
                            <a href="https://www.ubereats.com/store/la-placa-family-bakery/lIWfbz8IWwCKe9GfmXGgEQ?diningMode=DELIVERY&sc=SEARCH_SUGGESTION" target="_blank" rel="noopener noreferrer">
                                Online Order
                            </a>
                        </li>
                    </ul>
                )}
            </nav>
        </div>
    )
}