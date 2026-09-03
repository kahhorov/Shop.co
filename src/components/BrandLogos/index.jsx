import React from "react";
import Logo1 from "../../../assets/1.png";
import Logo2 from "../../../assets/2.png";
import Logo3 from "../../../assets/3.png";
import Logo4 from "../../../assets/4.png";
import Logo5 from "../../../assets/5.png";

const logos = [Logo1, Logo2, Logo3, Logo4, Logo5];

function BrandLogos() {
  return (
    <div className="bg-black  w-full">
      <div className="container text-white flex justify-between items-center !py-11">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
            className="object-contain shrink-0"
          />
        ))}
      </div>
    </div>
  );
}

export default BrandLogos;
