import React from "react";
import { FaPlus } from "react-icons/fa";
import HerroRetings from "../HerroRetings";
import herroImg from "../../../assets/herro.png";
import star1 from "../../../assets/Vector (1).png";
import star2 from "../../../assets/Vector.png";

function Herro() {
  return (
    <div className="bg-herroBg w-full h-[89.8vh] !py-[6.25rem]">
      <div className="container flex gap-10">
        <div className="w-1/2">
          <div className="flex flex-col gap-8">
            <h1 className="font-extrabold md:text-6xl text-6 w-lg -tracking-wider leading-14">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="font-light text-gray-600 w-xl">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <button className="bg-black text-white rounded-4xl cursor-pointer shadow-gray-800 hover:shadow-lg w-fit !py-2 !px-10 hover:bg-gray-800 transition-all duration-300 ease-in-out">
              Shop Now
            </button>
            <HerroRetings />
          </div>
        </div>
        <div className="w-1/2  relative">
          <img
            src={herroImg}
            alt=""
            className="w-full  object-contain absolute -top-[66px]"
          />
          <div>
            <img className="absolute bottom-46" src={star1} alt="" />
            <img className="absolute -top-5 right-0" src={star2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Herro;
