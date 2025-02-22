import { GiFullPizza } from "react-icons/gi";
import { LuCakeSlice } from "react-icons/lu";
import { TbCookieMan } from "react-icons/tb";
import { LuCroissant } from "react-icons/lu";
import {Link} from "react-scroll"

// export default function QuickFoodNav() {


//     return (
//         <div className="bg-beige sticky top-0 w-full z-50">
//             <nav>
//                 <ul className="flex justify-center items-center gap-4 sm:gap-8 text-gold py-2 sm:py-4">
//                     <li className="flex flex-row items-center sm:border-r-2 border-gold sm:pr-4">
//                         <Link to="/almondCookies" className="flex flex-row items-center">
//                         <TbCookieMan className="text-2xl sm:text-3xl" />
//                         <p className="ml-0.5 cursor-pointer">Cookies</p>
//                         </Link>
//                     </li>
//                     <li className="flex flex-row items-center sm:border-r-2 border-gold sm:pr-4">
//                     <Link to="/puffPastry" className="flex flex-row items-center">
//                         <LuCroissant className="text-2xl sm:text-3xl" />
//                     <p className="ml-0.5 cursor-pointer">Pastry</p>
//                     </Link>
//                     </li>
//                     <li className="flex flex-row items-center sm:border-r-2 border-gold sm:pr-4">
//                     <Link to="/cake" className="flex flex-row items-center">
//                         <LuCakeSlice className="text-2xl sm:text-3xl" />
//                     <p className="ml-0.5 cursor-pointer">Cake</p>
//                     </Link>
//                     </li>
//                     <li className="flex flex-row items-center">
//                     <Link to="/pizza" className="flex flex-row items-center">
//                         <GiFullPizza className="text-2xl sm:text-3xl" />
//                     <p className="ml-0.5 cursor-pointer">Pizza</p>
//                     </Link>
//                     </li>
//                 </ul>
//             </nav>
//         </div>
//     )
// }
export default function QuickFoodNav() {

    const links = [
        {
          id: 1,
          link: "Cookies",
          icon: <TbCookieMan className="mr-2 text-2xl sm:text-3xl" />,
        },
        {
          id: 2,
          link: "Pastry",
          icon: <LuCroissant className="mr-2 text-2xl sm:text-3xl" />,
        },
        {
          id: 3,
          link: "Cake", 
          icon: <LuCakeSlice className="mr-2 text-2xl sm:text-3xl" />,
        },
        {
          id: 4,
          link: "Pizza",
          icon: <GiFullPizza className="mr-2 text-2xl sm:text-3xl" />,
        }, 
      ];


    return (
        <div className="bg-beige sticky top-0 w-full z-50">
            <nav>
                <ul className="flex justify-center items-center gap-4 sm:gap-8 text-gold py-2 sm:py-4">
                    {links.map(({ id, link, icon }) => (
                    <li
                    key={id}
                    className="flex flex-row items-center sm:border-r-2 border-gold sm:pr-4">
                        <Link to={link} smooth duration={800} className="flex flex-row items-center cursor-pointer">
                        {icon} {link}
                        </Link>
                    </li>

                    ))}
                    
                </ul>
            </nav>
        </div>
    )
}





