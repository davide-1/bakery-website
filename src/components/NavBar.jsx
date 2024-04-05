// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom"
// import { FaBars, FaTimes } from "react-icons/fa";
// import logo2 from "../assets/IMG/logo2.png"


// export default function NavBar() {
//     const [navVisible, setNavVisible] = useState(true);
//     const [nav, setNav] = useState(false);
    

//     useEffect(() => {
//         const handleScroll = () => {
//             const isTop = window.scrollY < 100;
//             if (isTop !== navVisible) {
//                 setNavVisible(isTop);
//             }
//         };

//         window.addEventListener('scroll', handleScroll);

//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, [navVisible]);


//     return (
//         <div className="bg-beige">
//             <div className={`transition-opacity duration-500 ${navVisible ? 'visible' : 'opacity-0'}`}>
//                  <div className="flex justify-center">
//                     <img src={logo2} alt="" className=" h-auto" />
//                 </div>
//                 <nav className=" flex flex-col items-center justify-center h-20 text-2xl">
//                     <ul className="hidden md:flex gap-4 text-amber-800 capitalize font-medium p-4 ">
//                         <li className="hover:scale-105 duration-200 hover:text-gold">
//                             <Link to="/">
//                                 Home
//                             </Link>
//                         </li>
//                         <li className="hover:scale-105 duration-200 hover:text-gold">
//                             <Link to="/menu">
//                                 Pizza Menu
//                             </Link>
//                         </li>
//                         <li className="hover:scale-105 duration-200 hover:text-gold">
//                             <Link to="/photoGallery">
//                                 Photo Gallery
//                             </Link>
//                         </li>
//                         <li className="hover:scale-105 duration-200 hover:text-gold">
//                             <Link to="/contactUs">
//                                 Contact Us
//                             </Link>
//                         </li>
//                         <li className="hover:scale-105 duration-200 hover:text-gold">
//                             <Link to="/aboutUs">
//                                 About Us
//                             </Link>
//                         </li>
//                     </ul>
//                     <div
//                         onClick={() => setNav(!nav)}
//                         className="cursor-pointer z-10 md:hidden"
//                     >
//                         {nav ? <FaTimes size={30} className="absolute top-0 right-0 mt-4 mr-4 text-amber-800 hover:text-gold" /> : <FaBars size={30} className="text-amber-800 hover:text-gold" />}
//                     </div>

//                     {nav && (
//                         <ul className={`flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-beige text-amber-800 ${nav ? 'fade-in' : ''}`}>
//                             <li className="px-4 cursor-pointer py-6 text-4xl hover:text-gold">
//                                 <Link onClick={() => setNav(!nav)} to="/">
//                                     Home
//                                 </Link>
//                             </li>
//                             <li className="px-4 cursor-pointer py-6 text-4xl hover:text-gold">
//                                 <Link onClick={() => setNav(!nav)} to="/menu">
//                                     Menu
//                                 </Link>
//                             </li>
//                             <li className="px-4 cursor-pointer py-6 text-4xl hover:text-gold">
//                                 <Link onClick={() => setNav(!nav)} to="/photoGallery">
//                                     Photo Gallery
//                                 </Link>
//                             </li>
//                             <li className="px-4 cursor-pointer py-6 text-4xl hover:text-gold">
//                                 <Link onClick={() => setNav(!nav)} to="/contactUs">
//                                     Contact Us
//                                 </Link>
//                             </li>
//                             <li className="px-4 cursor-pointer py-6 text-4xl hover:text-gold">
//                                 <Link onClick={() => setNav(!nav)} to="/aboutUs">
//                                     About Us
//                                 </Link>
//                             </li>
//                         </ul>
//                     )}
//                 </nav>

//             </div>
//         </div>
//     )
// }

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom"
// import { FaBars, FaTimes } from "react-icons/fa";
// import logo2 from "../assets/IMG/logo2.png"
// import pane2 from "../assets/IMG/pane2.png"


// export default function NavBar() {
//     const [navVisible, setNavVisible] = useState(true);
//     const [nav, setNav] = useState(false);
    

//     useEffect(() => {
//         const handleScroll = () => {
//             const isTop = window.scrollY < 100;
//             if (isTop !== navVisible) {
//                 setNavVisible(isTop);
//             }
//         };

//         window.addEventListener('scroll', handleScroll);

//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, [navVisible]);


//     return (
//         <div className="relative bg-beige">
//         <div className={`transition-opacity duration-500 ${navVisible ? 'visible' : 'opacity-0'}`}>
//             <img src={pane2} alt="Background" className="absolute inset-0 w-full h-full object-cover" />
//             <div className="relative z-10">
//                 <div className="flex justify-center">
//                     <img src={logo2} alt="" className="h-auto" />
//                 </div>
//                 <nav className="flex flex-col items-center justify-center h-20 text-2xl">
//                     <ul className="hidden md:flex gap-4 text-amber-800 capitalize font-medium p-4 ">
//                         <li className="hover:scale-105 duration-200 hover:text-gold">
//                             <Link to="/">
//                                 Home
//                             </Link>
//                         </li>
//                         <li className="hover:scale-105 duration-200 hover:text-gold">
//                             <Link to="/menu">
//                                 Pizza Menu
//                             </Link>
//                         </li>
//                         <li className="hover:scale-105 duration-200 hover:text-gold">
//                             <Link to="/photoGallery">
//                                 Photo Gallery
//                             </Link>
//                         </li>
//                         <li className="hover:scale-105 duration-200 hover:text-gold">
//                             <Link to="/contactUs">
//                                 Contact Us
//                             </Link>
//                         </li>
//                         <li className="hover:scale-105 duration-200 hover:text-gold">
//                             <Link to="/aboutUs">
//                                 About Us
//                             </Link>
//                         </li>
//                     </ul>
//                     <div
//                         onClick={() => setNav(!nav)}
//                         className="cursor-pointer z-10 md:hidden"
//                     >
//                         {nav ? <FaTimes size={30} className="absolute top-0 right-0 mt-4 mr-4 text-amber-800 hover:text-gold" /> : <FaBars size={30} className="text-amber-800 hover:text-gold" />}
//                     </div>

//                     {nav && (
//                         <ul className={`flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-beige text-amber-800 ${nav ? 'fade-in' : ''}`}>
//                             <li className="px-4 cursor-pointer py-6 text-4xl hover:text-gold">
//                                 <Link onClick={() => setNav(!nav)} to="/">
//                                     Home
//                                 </Link>
//                             </li>
//                             <li className="px-4 cursor-pointer py-6 text-4xl hover:text-gold">
//                                 <Link onClick={() => setNav(!nav)} to="/menu">
//                                     Menu
//                                 </Link>
//                             </li>
//                             <li className="px-4 cursor-pointer py-6 text-4xl hover:text-gold">
//                                 <Link onClick={() => setNav(!nav)} to="/photoGallery">
//                                     Photo Gallery
//                                 </Link>
//                             </li>
//                             <li className="px-4 cursor-pointer py-6 text-4xl hover:text-gold">
//                                 <Link onClick={() => setNav(!nav)} to="/contactUs">
//                                     Contact Us
//                                 </Link>
//                             </li>
//                             <li className="px-4 cursor-pointer py-6 text-4xl hover:text-gold">
//                                 <Link onClick={() => setNav(!nav)} to="/aboutUs">
//                                     About Us
//                                 </Link>
//                             </li>
//                         </ul>
//                     )}
//                 </nav>
//               </div>
//             </div>
//         </div>
//     )
// }







// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { FaBars, FaTimes } from "react-icons/fa";
// import pane2 from "../assets/IMG/pane2.png";

// export default function NavBar() {
//     const [navVisible, setNavVisible] = useState(true);
//     const [nav, setNav] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             const isTop = window.scrollY < 100;
//             if (isTop !== navVisible) {
//                 setNavVisible(isTop);
//             }
//         };

//         window.addEventListener('scroll', handleScroll);

//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, [navVisible]);

//     return (
//         <div className="bg-beige relative">
//             <div className={`transition-opacity duration-500 ${navVisible ? 'visible' : 'opacity-0'}`}>
//                 <div className="relative" style={{ backgroundImage: `url(${pane2})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '300px' }}>
//                     <nav className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center text-2xl bg-opacity-75">
//                         <ul className="hidden md:flex gap-4 text-amber-800 capitalize font-medium p-4 ">
//                             <li className="hover:scale-105 duration-200 hover:text-gold">
//                                 <Link to="/">
//                                     Home
//                                 </Link>
//                             </li>
//                             <li className="hover:scale-105 duration-200 hover:text-gold">
//                                 <Link to="/menu">
//                                     Pizza Menu
//                                 </Link>
//                             </li>
//                             <li className="hover:scale-105 duration-200 hover:text-gold">
//                                 <Link to="/photoGallery">
//                                     Photo Gallery
//                                 </Link>
//                             </li>
//                             <li className="hover:scale-105 duration-200 hover:text-gold">
//                                 <Link to="/contactUs">
//                                     Contact Us
//                                 </Link>
//                             </li>
//                             <li className="hover:scale-105 duration-200 hover:text-gold">
//                                 <Link to="/aboutUs">
//                                     About Us
//                                 </Link>
//                             </li>
//                         </ul>
//                         <div
//                             onClick={() => setNav(!nav)}
//                             className="cursor-pointer z-10 md:hidden"
//                         >
//                             {nav ? <FaTimes size={30} className="absolute top-0 right-0 mt-4 mr-4 text-amber-800 hover:text-gold" /> : <FaBars size={30} className="text-amber-800 hover:text-gold" />}
//                         </div>

//                         {nav && (
//                             <ul className={`flex flex-col justify-center items-center w-full bg-beige text-amber-800 ${nav ? 'fade-in' : ''}`}>
//                                 <li className="px-4 cursor-pointer py-6 text-4xl hover:text-gold">
//                                     <Link onClick={() => setNav(!nav)} to="/">
//                                         Home
//                                     </Link>
//                                 </li>
//                                 <li className="px-4 cursor-pointer py-6 text-4xl hover:text-gold">
//                                     <Link onClick={() => setNav(!nav)} to="/menu">
//                                         Menu
//                                     </Link>
//                                 </li>
//                                 <li className="px-4 cursor-pointer py-6 text-4xl hover:text-gold">
//                                     <Link onClick={() => setNav(!nav)} to="/photoGallery">
//                                         Photo Gallery
//                                     </Link>
//                                 </li>
//                                 <li className="px-4 cursor-pointer py-6 text-4xl hover:text-gold">
//                                     <Link onClick={() => setNav(!nav)} to="/contactUs">
//                                         Contact Us
//                                     </Link>
//                                 </li>
//                                 <li className="px-4 cursor-pointer py-6 text-4xl hover:text-gold">
//                                     <Link onClick={() => setNav(!nav)} to="/aboutUs">
//                                         About Us
//                                     </Link>
//                                 </li>
//                             </ul>
//                         )}
//                     </nav>
//                 </div>
//             </div>
//         </div>
//     )
// }










import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa";
import logo2 from "../assets/IMG/logo2.png"
import logo from "../assets/IMG/logo.png"
import pizza from "../assets/IMG/pizza.png"
import SocialLinks from "./SocialLinks";


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
                        </ul>
                    )}
                </nav>
        </div>
    )
}