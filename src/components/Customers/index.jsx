import React, { useEffect, useState } from "react";
import Carousel from "rsuite/Carousel";
import "rsuite/Carousel/styles/index.css";

import { FaStar } from "react-icons/fa";
import { IoCheckmarkCircle } from "react-icons/io5";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const reviews = [
  {
    name: "Sarah M.",
    comment:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    name: "Alex K.",
    comment:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
  },
  {
    name: "James L.",
    comment:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
  },
  {
    name: "Mooen M.",
    comment:
      "Shop.co has become my go-to store for everything. The delivery is always fast and the clothes look exactly like the pictures on the website.",
  },
  {
    name: "Emily R.",
    comment:
      "The customer service is as good as the clothes. I had a question about sizing and they answered within minutes, so my order fitted perfectly.",
  },
  {
    name: "Olivia P.",
    comment:
      "Great prices for such a good quality. I've ordered three times already and every single piece still looks new after a lot of washes.",
  },
];

function getPerSlide() {
  if (window.innerWidth < 640) return 1;
  if (window.innerWidth < 1024) return 2;
  return 3;
}

function Customers() {
  const [perSlide, setPerSlide] = useState(getPerSlide);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setPerSlide(getPerSlide());
      setActiveIndex(0);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const items = [...reviews, ...reviews.slice(0, perSlide)];

  const handlePrev = () => {
    setActiveIndex((index) => (index - 1 + reviews.length) % reviews.length);
  };

  const handleNext = () => {
    setActiveIndex((index) => (index + 1) % reviews.length);
  };

  return (
    <div className="!py-20 container">
      <div className="flex justify-between items-center !pb-8">
        <h1 className="font-bold text-4xl sm:text-5xl tracking-tighter">
          OUR HAPPY CUSTOMERS
        </h1>
        <div className="flex gap-5 items-center">
          <button
            onClick={handlePrev}
            aria-label="Oldingi"
            className="hover:opacity-50"
          >
            <GoArrowLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            aria-label="Keyingi"
            className="hover:opacity-50"
          >
            <GoArrowRight size={24} />
          </button>
        </div>
      </div>

      <div className="overflow-hidden !py-2">
        <Carousel
          activeIndex={activeIndex}
          className="!h-[280px] sm:!h-[300px] lg:!h-[270px] !overflow-visible [&_.rs-carousel-content]:!overflow-visible [&_.rs-carousel-toolbar]:!hidden"
          style={{
            width: `calc(100% / ${perSlide})`,
            "--rs-carousel-bg": "transparent",
          }}
        >
          {items.map((review, index) => {
            return (
              <div key={index + 1} className="h-full !pr-5">
                <div className="h-full bg-white  border-gray-400/20 border rounded-3xl !p-6">
                  <div className="flex gap-1 items-center">
                    {Array.from({ length: 5 }).map((_, s) => {
                      return <FaStar key={s + 1} className="text-amber-400" />;
                    })}
                  </div>
                  <div className="flex gap-2 items-center !py-3">
                    <h3 className="font-bold">{review.name}</h3>
                    <IoCheckmarkCircle className="text-green-500" size={20} />
                  </div>
                  <p className="font-light text-gray-500">
                    "{review.comment}"
                  </p>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}

export default Customers;
