import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline, IoChevronDownSharp } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";

function Navbar() {
  return (
    <header className="flex gap-10 items-center py-3 border">
      <h1 className="font-extrabold text-black text-[2rem]">SHOP.CO</h1>
      <ul className="flex gap-6 font-[1.375rem] text-gray-700 text-[1rem]">
        <li className="flex gap-1 items-center ">
          Shop <IoChevronDownSharp />
        </li>
        <li>On Sale</li>
        <li>New Arrivals</li>
        <li>Brands</li>
      </ul>
      <div className="flex gap-3 !py-1.5 bg-gray10 rounded-full w-[46.75rem] items-center ">
        <span className=" flex  justify-end w-8 ">
          <CiSearch size={20} />
        </span>
        <input
          type="text"
          placeholder="Search for products..."
          className="w-[44rem] outline-0 text-gray-500"
        />
      </div>
      <div className="flex gap-4 text-[1.20rem]">
        <button>
          <IoCartOutline />
        </button>
        <button>
          <VscAccount />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
