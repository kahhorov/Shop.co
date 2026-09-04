import React from "react";
import { HiOutlineMail } from "react-icons/hi";

function NewsLetter() {
  return (
    <div className="container relative z-10">
      <div className="bg-black rounded-3xl !py-10 !px-6 sm:!px-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tighter text-white">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h1>

        <div className="flex flex-col gap-3 w-full lg:max-w-[350px] lg:justify-self-end">
          <div className="flex gap-3 items-center bg-white rounded-full !py-3 !px-5">
            <HiOutlineMail size={20} className="text-gray-400 shrink-0" />

            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full bg-transparent outline-none text-sm text-black placeholder:text-gray-400"
            />
          </div>
          <button className="bg-white rounded-full !py-3 !px-5 text-sm font-medium text-black hover:bg-gray-200 transition duration-300 ease-in-out">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
