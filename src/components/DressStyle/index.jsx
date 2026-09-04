import React from "react";
import Img1 from "../../../assets/card1.png";
import Img2 from "../../../assets/card2.png";
import Img3 from "../../../assets/card3.png";
import Img4 from "../../../assets/card4.png";

function DressStyle() {
  return (
    <div className="bg-gray10 !py-[2rem] text-center rounded-4xl !px-16">
      <h1 className="font-bold text-5xl uppercase !py-10 tracking-tighter">
        BROWSE BY dress STYLE
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 !py-10">
        <div className="sm:col-span-4">
          <img src={Img1} alt="" className="w-full h-40 sm:h-60 rounded-2xl" />
        </div>

        <div className="sm:col-span-8">
          <img src={Img2} alt="" className="w-full h-40 sm:h-60 rounded-2xl" />
        </div>

        <div className="sm:col-span-8">
          <img src={Img3} alt="" className="w-full h-40 sm:h-60 rounded-2xl" />
        </div>

        <div className="sm:col-span-4">
          <img src={Img4} alt="" className="w-full h-40 sm:h-60 rounded-2xl" />
        </div>
      </div>
    </div>
  );
}

export default DressStyle;
