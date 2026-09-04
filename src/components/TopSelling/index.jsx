import React from "react";
import Cards from "../Cards";
import { getProductsByCategory } from "../../data/products";

const products = getProductsByCategory("top-selling");

function TopSelling() {
  return (
    <div className="container !pt-14">
      <p className="uppercase text-5xl font-black text-center -tracking-wide">
        top selling
      </p>
      <Cards products={products} />
    </div>
  );
}

export default TopSelling;
