
import { FaFacebookSquare } from "react-icons/fa";
import { BsYelp } from "react-icons/bs";
import { SiUbereats } from "react-icons/si";



export default function SocialLinks() {


    const links = [
        {
            id: 1,
            child: (
                <>
                  <FaFacebookSquare size={30} />
                </>
            ),
            href: "https://www.facebook.com/profile.php?id=100063454668154"
        },
        {
            id: 2,
            child: (
                <>
                  <BsYelp size={30} />
                </>
            ),
            href: "https://www.yelp.com/biz/la-placa-family-bakery-ben-lomond?osq=la+placa+family+bakery"
        },
        {
            id: 3,
            child: (
                <>
                  <SiUbereats size={30} />
                </>
            ),
            href: "https://www.ubereats.com/store/la-placa-family-bakery/lIWfbz8IWwCKe9GfmXGgEQ?diningMode=DELIVERY&sc=SEARCH_SUGGESTION"
        },
    ]

    return (
        <div className="flex">
            {links.map(({ id, child, href }) => (
                <a
                    key={id}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="mr-4"
                >
                    {child}
                </a>
            ))}
        </div>
    );
}