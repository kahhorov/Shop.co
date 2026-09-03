import React from "react";
import Img1 from "../../../assets/product-1.png";
import Img2 from "../../../assets/product-2.png";
import Img3 from "../../../assets/product-3.png";
import Img4 from "../../../assets/product-4.png";
import { FaStar } from "react-icons/fa";
import { TiStarHalf } from "react-icons/ti";
const products = [
  {
    img: Img1,
    title: "T-SHIRT WITH TAPE DETAILS",
    rating: "4.5/",
    price: "$120",
  },
  {
    img: Img2,
    title: "SKINNY FIT JEANS",
    rating: "3.5/",
    price: "$240",
    sale: "$260",
    discount: "-20%",
  },
  {
    img: Img3,
    title: "CHECKERED SHIRT",
    rating: "4.5/",
    price: "$180",
  },
  {
    img: Img4,
    title: "SLEEVE STRIPED T-SHIRT",
    rating: "4.5/",
    price: "$130",
    sale: "$160",
    discount: "-30%",
  },
];

function Card() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 !py-10">
      {products.map((product, index) => {
        return (
          <div key={index + 1}>
            <img src={product.img} alt="" className="w-full rounded-xl" />
            <h3 className="!mt-4 font-bold">{product.title}</h3>
            <div className="flex gap-2 items-center !py-1">
              {products.map((s, i) => {
                return (
                  <p key={i + 1}>
                    <FaStar className="text-amber-400" />
                  </p>
                );
              })}
              <TiStarHalf className="text-amber-400" size={20} />
              <span className="font-light">
                {product.rating} <span className="text-gray-400">5</span>
              </span>
            </div>
            <div className="flex gap-2 items-center">
              <p className="font-bold text-2xl">{product.price}</p>
              {product.sale && (
                <p className="text-xl line-through font-black text-gray-400">
                  {product.sale}
                </p>
              )}
              {product.discount && (
                <p className="flex items-center rounded-full bg-red-400/20  !pt-0.5 !px-2 text-xs font-medium text-red-500 ">
                  {product.discount}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
