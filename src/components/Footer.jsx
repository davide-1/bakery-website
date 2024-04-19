import React from "react";
import BusinessHours from "./BusinessHours";
import SocialLinks from "./SocialLinks";
export default function Footer() {


    return (
        <footer className="bg-beige">
            <div className="container mx-auto px-4 py-10">
            <div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-8  ">
                <div className="sm:border-r-2 border-gold sm:pr-4">
                    <h1 className=" text-3xl font-semibold mb-5 text-gold">
                        About Us
                    </h1>
                    <p className="text-amber-800 font-semibold">
                        La Placa family Bakery was founded by Leonardo La Placa in 2017. For nearly a decade, our Italian Pizzeria Bakery has brought the Italian signature to the Santa Cruz Mountain community and the Bay Area.
                    </p>
                </div>
                <div className="sm:border-r-2 border-gold sm:pr-4">
                    <h1 className="text-3xl font-semibold mb-8 text-gold">
                        Address
                    </h1>
                    <p className="text-amber-800 font-semibold">9280 Highway-9 Ben Lomond, CA 95005 <br />Telephone: 831-609-6552 <br />During power outage: 831-713-6548</p>
                </div>
                <div className="sm:border-r-2 border-gold sm:pr-4">
                    <h1 className="text-3xl font-semibold mb-8 text-gold">
                        Social Media
                    </h1>
                    <p className="text-amber-800 font-semibold">Visit our FACEBOOK and YELP pages for reviews and additional information. And order online with Uber Eats</p>
                    <SocialLinks />
                </div>
                <div>
                    <BusinessHours />
                </div>

            </div>

            </div>
        </footer>
    )
}