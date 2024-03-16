import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { BsYelp } from "react-icons/bs";



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
    ]

    return (
        <div className="flex text-amber-800">
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