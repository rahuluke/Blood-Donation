import React from "react";
import Contact from "../components/Contact";

export default function RequestDonation() {
  return (
    <>
      <div className="about-heading min-h-[60vh] bg-black text-white px-4 flex flex-col justify-center items-center relative">
        <div className="box absolute top-0 left-0 w-full h-full z-10 opacity-30">
          <img
            src="/get-blood.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="heading font-bold text-2xl text-center md:text-3xl z-30">
          In Need of blood? Contact us
        </div>
        <div className="para text-center mt-3 md:text-lg z-30">
          Fill the form and we willmake the blood available to you as soon as
          possible
        </div>
      </div>
      <Contact requestMethod={"requests"} />
    </>
  );
}
