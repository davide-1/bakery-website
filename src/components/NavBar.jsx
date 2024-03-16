import React, { useState } from "react";
import { Link } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa";
import logo2 from "../assets/IMG/logo2.png"


export default function NavBar() {
    const [nav, setNav] = useState(false);

    return (
        <>
            <div className="flex justify-center mt-5">
                <img src={logo2} alt="" className=" h-auto" />
            </div>
        <nav className=" flex flex-col items-center justify-center h-20 text-2xl ">
            <ul className="hidden md:flex gap-4 text-amber-800 capitalize font-medium p-4 ">
                <li className="hover:scale-105 duration-200 hover:text-gold">
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li className="hover:scale-105 duration-200 hover:text-gold">
                    <Link to="/menu">
                        Menu
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
            </ul>
            <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer z-10 md:hidden"
            >
                {nav ? <FaTimes size={30} className="absolute top-0 right-0 mt-4 mr-4 text-amber-800 hover:text-gold" /> : <FaBars size={30} className="text-amber-800 hover:text-gold"/>}
            </div>

            {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-white text-amber-800">
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
                </ul>
            )}
        </nav>
        
        </>
    )
}