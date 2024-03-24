import React from "react";

export default function ContactUs() {
    return (
            <div className="bg-beige pt-10">
                <h1 className="flex justify-center text-7xl font-bold text-gold mb-10 md:mb-10">Contact </h1>
                <hr className="mb-10 border-t-1 border-amber-800 w-52 mx-auto" />
                <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
                        <p className="text-2xl py-6 font-semibold text-amber-800">Submit the form below to get in touch with us</p>
                    <div className="flex flex-col md:flex-row justify-between">
                        <form action="https://getform.io/f/Rb4lEgbB"
                            method="POST"
                            className="flex flex-col w-full sm:border-r-2 border-gold pr-8"
                        >
                            <input type="text"
                                name="name"
                                placeholder="Enter your name" className="p-2 bg-transparent border-2 rounded-md text-amber-800 focus:outline-none"
                            />
                            <input type="text"
                                name="email"
                                placeholder="Enter your email" className="p-2 bg-transparent border-2 rounded-md text-amber-800 focus:outline-none my-4"
                            />
                            <textarea
                                name="message"
                                placeholder="Enter your message"
                                rows="10"
                                className="p-2 bg-transparent border-2 rounded-md text-amber-800 focus:outline-none"
                            ></textarea>
                            <button className="text-amber-800 font-semibold bg-gold px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">Send</button>
                        </form>
                        <div className="p-4">
                            <div>
                                <h1 className="flex justify-center text-3xl font-bold text-gold">Info</h1>
                                <p className="text-xl text-gold font-bold  ">Email</p>
                                <p className="text-amber-800 font-bold">bakerylaplaca@gmail.com</p>
                            </div>
                            <div className="my-4">
                                <p className="text-xl text-gold font-bold  ">Phone</p>
                                <p className="text-amber-800 font-bold">831-609-6552</p>
                            </div>
                            <div className="my-4">
                                <p className="text-xl text-gold font-bold  ">During Power Outage</p>
                                <p className="text-amber-800 font-bold">831-713-6548</p>
                            </div>
                            <div>
                                <p className="text-xl text-gold font-bold  ">Address</p>
                                <p className="text-amber-800 font-bold">920 CA-9 Ben Lomond, CA 95005 </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

