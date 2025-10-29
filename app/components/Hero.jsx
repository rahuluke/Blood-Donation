"use client";

import React from 'react'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from 'react';

export default function Hero() {
    const image = ["/hero1.png", "/hero2.png", "/hero3.png"]

    const [crousel, setCrousel] = useState(0)

    function handleNextButton() {
        if (crousel + 1 > image.length - 1) {
            setCrousel(0)
        } else {
            setCrousel(crousel + 1)
        }
    }
    function handlePrevButton() {
        if (crousel - 1 < 0) {
            setCrousel(image.length - 1)
        } else {
            setCrousel(crousel - 1)
        }
    }

    setTimeout(() => {
        handleNextButton()
    }, 4000);

    return (
        <div className=" md:px-4 mt-4">
            <div className="container px-4 md:px-0 m-auto">
                {/* <div className="crousel relative">
                    <button onClick={()=>{handlePrevButton()}} className="buttons-left absolute left-2 md:left-4 top-1/2 bg-white/50 rounded-full p-2 z-20"> <FaChevronLeft /> </button>
                    <button onClick={() => { handleNextButton() }} className="buttons-right absolute right-2 md:right-4 top-1/2 bg-white/50 rounded-full p-2 z-20"> <FaChevronRight size={15} /> </button>
                    <div className="image h-[50vh] md:h-[70vh] bg-red-500 w-full bg-cover transition-all duration-500 bg-center rounded-lg" style={{ backgroundImage: `url(${image[crousel]})`, filter: "brightness(70%)" }}></div>
                </div> */}
                <div className="relative overflow-hidden rounded-lg bg-black">
                    <div className="absolute top-0 z-10 flex w-full h-full justify-center items-center flex-col text-white gap-3">
                        <div className="heading font-semibold text-lg px-7 text-center sm:text-xl md:text-2xl lg:text-3xl">Empowering Donors, Saving Lives</div>
                        <div className="para px-10 text-center sm:px-10 md:px-28 lg:text-lg lg:px-36 xl:px-64">Join the movement. Become a blood donor and be the hero someone desperately needs. With just one donation, you can empower our community and make a real difference in someone's life.</div>
                    </div>
                    <button onClick={() => { handlePrevButton() }} className="z-20 absolute top-1/2 bg-white/90 rounded-full p-1 left-4" ><FaChevronLeft size={15} /></button>
                    <button onClick={() => { handleNextButton() }} className="z-20 absolute top-1/2 bg-white/90 rounded-full p-1 right-4" ><FaChevronRight size={15} /></button>
                    <div className="img flex h-[30rem] transition-all duration-500 ease-in-out" style={{ transform: `translateX(${crousel * -100}%)` }}>

                        {image.map((url) => (
                            <img src={url} alt={url} key={url} className="min-w-full object-cover object-center h-full opacity-40" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
