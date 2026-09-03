import React from "react";
import { FaPlus } from "react-icons/fa";

const herroRetings = [
  {
    reting1: "200",
    desc: "International Brands",
    icon: <FaPlus size={30} />,
  },
  {
    reting1: "2,000",
    desc: "Hight-Quality Products",
    icon: <FaPlus size={30} />,
  },
  {
    reting1: "30,000",
    desc: "Happy Customers",
    icon: <FaPlus size={30} />,
  },
];

function HerroRetings() {
  return (
    <div className="flex gap-8 !py-2">
      {herroRetings.map((item, index) => {
        return (
          <div key={index + 1}>
            <div
              className={`w-44 border-gray-400 ${
                index !== herroRetings.length - 1 ? "border-r" : ""
              }`}
            >
              <h3 className="text-4xl font-bold flex gap-2 items-center">
                {item.reting1}
                <span>{item.icon}</span>
              </h3>
              <p className="text-[1rem] font-light text-gray-700">
                {item.desc}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default HerroRetings;
