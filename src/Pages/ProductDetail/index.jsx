import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaCheck, FaStar } from "react-icons/fa";
import { TiStarHalf } from "react-icons/ti";
import {
  IoChevronDownSharp,
  IoCheckmarkCircle,
  IoEllipsisHorizontal,
} from "react-icons/io5";
import { LuSettings2 } from "react-icons/lu";
import Card from "../../components/Card";
import { getProductsById, getProductsByCategory } from "../../data/products";
import { reviews } from "../../data/reviews";

import Img2 from "../../../assets/image 5.png";
import Img3 from "../../../assets/image 6.png";
import Button from "../../components/Button";
import { CartContext } from "../../context/CardContext";

const colors = [
  { name: "Olive", code: "#4F4631" },
  { name: "Green", code: "#314F4A" },
  { name: "Navy", code: "#31344F" },
];
const sizes = ["Small", "Medium", "Large", "X-Large"];
const tabs = ["Product Details", "Rating & Reviews", "FAQs"];

function ProductDetail() {
  const { id } = useParams();
  const product = getProductsById(id);

  const [photo, setPhoto] = useState(0);
  const [color, setColor] = useState(0);
  const [size, setSize] = useState("Large");
  const [count, setCount] = useState(1);
  const { addToCart } = useContext(CartContext);

  if (!product) {
    return (
      <div className="container !py-32 text-center">
        <h1 className="font-bold text-3xl">Product not found</h1>
        <p className="font-light text-gray-500 !py-4">
          Bunday mahsulot mavjud emas yoki o'chirilgan.
        </p>
        <Link to="/" className="underline">
          Bosh sahifaga qaytish
        </Link>
      </div>
    );
  }

  const photos = [product.img, Img2, Img3];

  const r = getProductsByCategory(product.category).filter(
    (item) => item.id !== product.id,
  );

  return (
    <div className="container !py-6">
      <div className="flex gap-2 items-center font-light text-gray-500 text-sm">
        <Link to="/" className="hover:text-black">
          Home
        </Link>
        <span>/</span>
        <span>Shop</span>
        <span>/</span>
        <span>Men</span>
        <span>/</span>
        <span className="text-black">{product.title.slice(0, 9)}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 !py-8">
        <div className="flex gap-4">
          <div className="flex flex-col gap-4 w-[25%]">
            {photos.map((item, index) => {
              return (
                <button
                  key={index + 1}
                  onClick={() => setPhoto(index)}
                  className={`bg-gray10 rounded-2xl overflow-hidden border-2 ${
                    photo === index ? "border-black" : "border-transparent"
                  }`}
                >
                  <img src={item} alt={product.title} className="w-full" />
                </button>
              );
            })}
          </div>

          <div className="bg-gray10 rounded-2xl w-[75%] overflow-hidden">
            <img
              src={photos[photo]}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div>
          <h1 className="font-bold text-3xl sm:text-4xl uppercase tracking-tighter">
            {product.title}
          </h1>

          <div className="flex gap-1 items-center !py-3">
            <FaStar className="text-amber-400" size={20} />
            <FaStar className="text-amber-400" size={20} />
            <FaStar className="text-amber-400" size={20} />
            <FaStar className="text-amber-400" size={20} />
            <TiStarHalf className="text-amber-400" size={26} />
            <span className="font-light !ml-1">
              {product.rating}
              <span className="text-gray-400">/5</span>
            </span>
          </div>

          <div className="flex gap-3 items-center">
            <p className="font-bold text-3xl">${product.price * count}</p>
            {product.sale && (
              <p className="text-3xl line-through font-bold text-gray-400">
                {product.sale}
              </p>
            )}
            {product.discount && (
              <p className="flex items-center rounded-full bg-red-400/20 !pt-0.5 !px-3 text-sm font-medium text-red-500">
                {product.discount}
              </p>
            )}
          </div>

          <p className="font-light text-gray-500 !py-5">
            {product.description}
          </p>

          <hr className="border-gray-400/20 border-t" />

          <div className="!py-5">
            <p className="font-light text-gray-500 !pb-3">Select Colors</p>
            <div className="flex gap-3 items-center">
              {colors.map((item, index) => {
                return (
                  <button
                    key={index + 1}
                    onClick={() => setColor(index)}
                    style={{ backgroundColor: item.code }}
                    className="flex justify-center items-center rounded-full w-9 h-9 text-white"
                  >
                    {color === index && <FaCheck size={14} />}
                  </button>
                );
              })}
            </div>
          </div>

          <hr className="border-gray-400/20 border-t" />

          <div className="!py-5">
            <p className="font-light text-gray-500 !pb-3">Choose Size</p>
            <div className="flex flex-wrap gap-3 items-center">
              {sizes.map((item) => {
                return (
                  <button
                    key={item}
                    onClick={() => setSize(item)}
                    className={`rounded-full !py-2.5 !px-6 text-sm ${
                      size === item
                        ? "bg-black text-white"
                        : "bg-gray10 text-gray-500"
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>

          <hr className="border-gray-400/20 border-t" />

          <div className="flex gap-4 items-center !py-5">
            <div className="flex justify-between items-center bg-gray10 rounded-full !py-3 !px-6 w-[40%]">
              <button onClick={() => setCount(count > 1 ? count - 1 : count)}>
                -
              </button>
              <span>{count}</span>
              <button onClick={() => setCount(count + 1)}>+</button>
            </div>

            <button
              onClick={() => addToCart(product, size, colors[color].name, count)}
              className="bg-black rounded-full !py-3 w-[60%] text-white hover:bg-gray-700 transition duration-300 ease-in-out"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 border-gray-400/20 border-b !py-4 text-center">
        {tabs.map((item) => {
          return (
            <p
              key={item}
              className={
                item === "Rating & Reviews"
                  ? "font-medium text-black border-black border-b-2 !pb-4 !-mb-4"
                  : "font-light text-gray-500"
              }
            >
              {item}
            </p>
          );
        })}
      </div>

      <div className="flex flex-wrap justify-between items-center gap-4 !py-6">
        <h2 className="font-bold text-xl">
          All Reviews <span className="font-light text-gray-500">(451)</span>
        </h2>

        <div className="flex gap-3 items-center">
          <button className="flex justify-center items-center bg-gray10 rounded-full w-11 h-11">
            <LuSettings2 size={18} />
          </button>
          <button className="flex gap-2 items-center bg-gray10 rounded-full !py-3 !px-5 text-sm">
            Latest <IoChevronDownSharp />
          </button>
          <button className="bg-black rounded-full !py-3 !px-5 text-white text-sm">
            Write a Review
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {reviews.map((review) => {
          return (
            <div
              key={review.id}
              className="border-gray-400/20 border rounded-3xl !p-6"
            >
              <div className="flex justify-between items-start">
                <div className="flex gap-1 items-center">
                  <FaStar className="text-amber-400" />
                  <FaStar className="text-amber-400" />
                  <FaStar className="text-amber-400" />
                  <FaStar className="text-amber-400" />
                  <TiStarHalf className="text-amber-400" size={20} />
                </div>
                <IoEllipsisHorizontal className="text-gray-400" size={20} />
              </div>

              <div className="flex gap-2 items-center !py-3">
                <h3 className="font-bold">{review.name}</h3>
                <IoCheckmarkCircle className="text-green-500" size={20} />
              </div>

              <p className="font-light text-gray-500 text-sm">
                '{review.comment}'
              </p>

              <p className="font-medium text-gray-500 text-sm !pt-4">
                {review.date}
              </p>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center !py-8">
        <Button text="Load More Reviews" />
      </div>

      {r.length > 0 && (
        <div className="!py-6">
          <h2 className="font-bold text-3xl uppercase tracking-tighter text-center">
            You might also like
          </h2>
          <Card products={r} />
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
