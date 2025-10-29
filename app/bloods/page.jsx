import React from 'react'
import BloodDB from '../components/BloodDB'

export default function SearchBloodPage() {
    return (
        <>
            <div className="about-heading min-h-[60vh] bg-black text-white px-4 flex flex-col justify-center items-center relative z-30">
            <div className="box absolute top-0 left-0 w-full h-full z-10 opacity-30">
          <img
            src="/db.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
                <div className="heading font-bold text-2xl text-center md:text-3xl z-30">In Need for Blood? Find Here</div>
                <div className="para text-center mt-3 md:text-lg z-30">search for the type of blood in the region contact us and we will deliver it to you as soon as possible</div>
            </div>
            <div className="md:px-4">
                <div className="container m-auto px-4 mdLpx-0">
                    <div className="heading text-2xl font-semibold text-zinc-800 my-5 sm:text-3xl md:my-8 text-center z-30">Blood DB</div>
                </div>
            </div>
            <BloodDB />
        </>
    )
}
