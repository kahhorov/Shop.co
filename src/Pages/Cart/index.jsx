import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoTrashOutline, IoPricetagOutline } from "react-icons/io5";
import { GoArrowRight } from "react-icons/go";
import { CartContext } from "../../context/CardContext";
import { formatTitle } from "../../utils/formatTitle";

function Cart() {
  const { cart, increment, decrement, removeFromCart } =
    useContext(CartContext);

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.amount,
    0,
  );
  const discount = Math.round(subtotal * 0.2);
  const delivery = subtotal > 0 ? 15 : 0;
  const total = subtotal - discount + delivery;

  return (
    <div className="container !py-6">
      <div className="flex gap-2 items-center font-light text-gray-500 text-sm">
        <Link to="/" className="hover:text-black">
          Home
        </Link>
        <span>/</span>
        <span className="text-black">Cart</span>
      </div>

      <h1 className="font-black text-4xl sm:text-5xl uppercase tracking-tighter !py-6">
        Your cart
      </h1>

      {cart.length === 0 ? (
        <div className="border-gray-400/20 border rounded-3xl !py-20 text-center">
          <p className="font-bold text-xl">Savat bo'sh</p>
          <p className="font-light text-gray-500 !py-3">
            Hali hech qanday mahsulot qo'shilmagan.
          </p>
          <Link to="/" className="underline">
            Xarid qilishni boshlash
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2 border-gray-400/20 border rounded-3xl !p-5">
            {cart.map((item, index) => {
              return (
                <div key={item.id}>
                  {index > 0 && (
                    <hr className="border-gray-400/20 border-t !my-4" />
                  )}

                  <div className="flex gap-4">
                    <Link to={`/product/${item.id}`} className="shrink-0">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="bg-gray10 rounded-xl w-24 h-24 object-cover"
                      />
                    </Link>

                    <div className="flex-1">
                      <h3 className="font-bold">{formatTitle(item.title)}</h3>
                      <p className="font-light text-gray-500 text-xs">
                        Size: <span className="text-black">{item.size}</span>
                      </p>
                      <p className="font-light text-gray-500 text-xs">
                        Color: <span className="text-black">{item.color}</span>
                      </p>
                      <p className="font-bold text-xl !pt-2">${item.price}</p>
                    </div>

                    <div className="flex flex-col justify-between items-end">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <IoTrashOutline size={20} />
                      </button>

                      <div className="flex justify-between items-center bg-gray10 rounded-full !py-2 !px-4 w-28">
                        <button onClick={() => decrement(item.id)}>-</button>
                        <span className="text-sm">{item.amount}</span>
                        <button onClick={() => increment(item.id)}>+</button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="border-gray-400/20 border rounded-3xl !p-5 h-fit">
            <h2 className="font-bold text-xl">Order Summary</h2>

            <div className="flex justify-between items-center !py-3">
              <p className="font-light text-gray-500">Subtotal</p>
              <p className="font-bold">${subtotal}</p>
            </div>

            <div className="flex justify-between items-center !pb-3">
              <p className="font-light text-gray-500">Discount (-20%)</p>
              <p className="font-bold text-red-500">-${discount}</p>
            </div>

            <div className="flex justify-between items-center !pb-3">
              <p className="font-light text-gray-500">Delivery Fee</p>
              <p className="font-bold">${delivery}</p>
            </div>

            <hr className="border-gray-400/20 border-t" />

            <div className="flex justify-between items-center !py-4">
              <p>Total</p>
              <p className="font-bold text-xl">${total}</p>
            </div>

            <div className="flex gap-3 items-center">
              <div className="flex gap-2 items-center bg-gray10 rounded-full !py-3 !px-4 w-full">
                <IoPricetagOutline className="text-gray-400 shrink-0" />
                <input
                  type="text"
                  placeholder="Add promo code"
                  className="w-full bg-transparent outline-none text-sm placeholder:text-gray-400"
                />
              </div>
              <button className="bg-black rounded-full !py-3 !px-7 text-white text-sm hover:bg-gray-700 transition duration-300 ease-in-out">
                Apply
              </button>
            </div>

            <button className="flex justify-center items-center gap-3 bg-black rounded-full !py-4 !mt-4 w-full text-white hover:bg-gray-700 transition duration-300 ease-in-out">
              Go to Checkout <GoArrowRight />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
