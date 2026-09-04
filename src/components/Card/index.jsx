import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { TiStarHalf } from "react-icons/ti";
import { formatTitle } from "../../utils/formatTitle";

function Card({ products = [] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 !py-10">
      {products.map((product) => {
        return (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="block group"
          >
            <img
              src={product.img}
              alt={product.title}
              className="w-full rounded-xl group-hover:opacity-80 transition duration-300 ease-in-out"
            />
            <h3 className="!mt-4 font-bold">{formatTitle(product.title)}</h3>

            <div className="flex gap-1 items-center !py-1">
              <FaStar className="text-amber-400" />
              <FaStar className="text-amber-400" />
              <FaStar className="text-amber-400" />
              <FaStar className="text-amber-400" />
              <TiStarHalf className="text-amber-400" size={20} />
              <span className="font-light text-sm !ml-1">
                {product.rating}
                <span className="text-gray-400">/5</span>
              </span>
            </div>

            <div className="flex gap-2 items-center">
              <p className="font-bold text-2xl">${product.price}</p>
              {product.sale && (
                <p className="text-xl line-through font-black text-gray-400">
                  {product.sale}
                </p>
              )}
              {product.discount && (
                <p className="flex items-center rounded-full bg-red-400/20 !pt-0.5 !px-2 text-xs font-medium text-red-500">
                  {product.discount}
                </p>
              )}
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Card;
