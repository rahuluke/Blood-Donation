import React from 'react'
import Contact from '../components/Contact'

export default function DonatePage() {
  return (
    <>
      <div className="about-heading min-h-[60vh] bg-black text-white px-4 flex flex-col justify-center items-center relative">
      <div className="box absolute top-0 left-0 w-full h-full z-10 opacity-30">
          <img
            src="/donate.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="heading font-bold text-2xl text-center md:text-3xl z-30">Want to donate blood? Contact us</div>
        <div className="para text-center mt-3 md:text-lg z-30">Help us to by donating bolood this may save a persons life, help them and save their lives</div>
      </div>

      <Contact requestMethod={"donate"}/>
    </>
  )
}
