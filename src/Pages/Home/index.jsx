import React from "react";
import BrandLogos from "../../components/BrandLogos";
import Customers from "../../components/Customers";
import DressStyle from "../../components/DressStyle";
import Herro from "../../components/Herro";
import NewArrivals from "../../components/NewArrivals";
import TopSelling from "../../components/TopSelling";

function Home() {
  return (
    <>
      <Herro />
      <BrandLogos />
      <NewArrivals />
      <hr className="border-gray-400/20 border-t-2 container" />
      <TopSelling />
      <div className="container">
        <DressStyle />
      </div>
      <Customers />
    </>
  );
}

export default Home;
