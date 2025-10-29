import React from "react";
import FAQs from "../components/FAQs";
import { Suspense } from "react";
export default function FAQsPage() {
  return (
    <>
      <div className="about-heading min-h-[60vh] bg-black text-white px-4 flex flex-col justify-center items-center relative">
        <div className="box absolute top-0 left-0 w-full h-full z-10 opacity-30">
          <img
            src="/faq-featured.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="heading font-bold text-2xl text-center md:text-3xl z-20">
          Frequently asked questions
        </div>
        <div className="para text-center mt-3 md:text-lg z-20">
          ask us every thing we are ready to answer all of your questions{" "}
        </div>
      </div>

      <FAQs />
    </>
  );
}
