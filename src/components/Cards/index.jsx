import React from "react";
import Card from "../Card";
import Button from "../Button";

function Cards() {
  return (
    <div className="!py-10">
      <Card />
      <div className="w-full flex justify-center !py-10">
        <Button text="View All" />
      </div>
    </div>
  );
}

export default Cards;
