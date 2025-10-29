import React from 'react'
import AboutCmp from '../components/About'

export default function AboutPage() {
    return (
        <>
            <div className="about-heading min-h-[60vh] bg-black text-white px-4 flex flex-col justify-center items-center relative">
                <div className="box absolute top-0 left-0 w-full h-full z-10 opacity-30">
                    <img src="/about-featured.png" alt="" className='w-full h-full object-cover' />
                </div>
                <div className="heading font-bold text-2xl text-center md:text-3xl z-30">Who are we?</div>
                <div className="para text-center mt-3 md:text-lg z-30">we are a community working on a welfare of people</div>
            </div>
            <AboutCmp/>
        </>
    )
}
