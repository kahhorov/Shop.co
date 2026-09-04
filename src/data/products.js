import Frame1 from "../../assets/Frame 1.png";
import Frame2 from "../../assets/Frame 2.png";
import Frame3 from "../../assets/Frame 3.png";
import Frame4 from "../../assets/Frame 4.png";

import Product1 from "../../assets/product-1.png";
import Product2 from "../../assets/product-2.png";
import Product3 from "../../assets/product-3.png";
import Product4 from "../../assets/product-4.png";

export const products = [
  {
    id: 1,
    img: Frame1,
    title: "VERTICAL STRIPED SHIRT",
    rating: 5.0,
    price: 212,
    sale: "$232",
    discount: "-20%",
    category: "top-selling",
    description:
      "This vertical striped shirt is crafted from breathable cotton, giving you a sharp look that works just as well at the office as it does on a weekend out.",
  },
  {
    id: 2,
    img: Frame2,
    title: "COURAGE GRAPHIC T-SHIRT",
    rating: 4.0,
    price: 145,
    category: "top-selling",
    description:
      "A soft cotton t-shirt with a bold graphic print. Pre-shrunk fabric keeps its shape and colour wash after wash.",
  },
  {
    id: 3,
    img: Frame3,
    title: "LOOSE FIT BERMUDA SHORTS",
    rating: 3.0,
    price: 80,
    category: "top-selling",
    description:
      "Relaxed bermuda shorts with an elastic waistband and deep side pockets - built for warm days and easy movement.",
  },
  {
    id: 4,
    img: Frame4,
    title: "FADED SKINNY JEANS",
    rating: 4.5,
    price: 210,
    category: "top-selling",
    description:
      "Skinny fit jeans in a faded wash with a touch of stretch, so they hold their shape while staying comfortable all day.",
  },
  {
    id: 5,
    img: Product1,
    title: "T-SHIRT WITH TAPE DETAILS",
    rating: 4.5,
    price: 120,
    category: "new-arrivals",
    description:
      "A relaxed t-shirt finished with contrast tape along the sleeves. Made from heavyweight cotton for a premium feel.",
  },
  {
    id: 6,
    img: Product2,
    title: "SKINNY FIT JEANS",
    rating: 3.5,
    price: 240,
    sale: "$260",
    discount: "-20%",
    category: "new-arrivals",
    description:
      "Classic five-pocket skinny jeans in a mid-blue wash, cut close through the leg with just enough stretch to move with you.",
  },
  {
    id: 7,
    img: Product3,
    title: "CHECKERED SHIRT",
    rating: 4.5,
    price: 180,
    category: "new-arrivals",
    description:
      "A timeless checkered shirt in brushed cotton. Wear it buttoned up or open over a plain tee.",
  },
  {
    id: 8,
    img: Product4,
    title: "SLEEVE STRIPED T-SHIRT",
    rating: 4.5,
    price: 130,
    sale: "$160",
    discount: "-30%",
    category: "new-arrivals",
    description:
      "An orange t-shirt with striped sleeve panels - a simple piece with a detail that makes it stand out.",
  },
];

export function getProductsByCategory(category) {
  return products.filter((product) => product.category === category);
}

export function getProductsById(id) {
  return products.find((product) => product.id === Number(id));
}
