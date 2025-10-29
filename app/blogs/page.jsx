import React from "react";
import BlogsCmp from "../components/Blogs";

export default function BlogsPage() {
  return (
    <>
      <div className="about-heading min-h-[60vh] bg-black text-white px-4 flex flex-col justify-center items-center mb-8 relative">
        <div className="box absolute top-0 left-0 w-full h-full z-10 opacity-30">
          <img
            src="/blogs.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="heading font-bold text-2xl text-center md:text-3xl z-30">
          Blogs
        </div>
        <div className="para text-center mt-3 md:text-lg z-30">
          Read the blogs of lead industry professionals
        </div>
      </div>
      <BlogsCmp />
    </>
  );
}
