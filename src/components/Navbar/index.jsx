import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline, IoChevronDownSharp } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { CartContext } from "../../context/CardContext";

function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <header className="flex gap-10 items-center !py-3">
      <Link to="/" className="font-extrabold text-black text-[2rem]">
        SHOP.CO
      </Link>
      <ul className="flex gap-6 font-[1.375rem] text-gray-700 text-[1rem]">
        <li className="flex gap-1 items-center ">
          Shop <IoChevronDownSharp />
        </li>
        <li>On Sale</li>
        <li>New Arrivals</li>
        <li>Brands</li>
      </ul>
      <div className="flex gap-3 !py-1.5 bg-gray10 rounded-full w-[46rem] items-center ">
        <span className=" flex  justify-end w-8 ">
          <CiSearch size={20} />
        </span>
        <input
          type="search"
          placeholder="Search for products..."
          className="w-[42.50rem] outline-0 text-gray-500"
        />
      </div>
      <div className="flex gap-4 text-[1.20rem] relative">
        <Link to={"/cart"} className="block relative">
          {cart.length > 0 ? (
            <span className="rounded-full bg-red-500 !p-1.5 !py-0.5 text-xs font-medium text-white absolute -top-3 left-3">
              {cart.length > 99 ? "99+" : cart.length}
            </span>
          ) : (
            ""
          )}
          <IoCartOutline size={22} />
        </Link>
        <button>
          <VscAccount size={22} />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
