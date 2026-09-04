import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product, size, color, amount) => {
    setCart((prev) => {
      const item = prev.find((item) => item.id === product.id);
      if (item) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, amount: item.amount + amount }
            : item,
        );
      }
      return [
        ...prev,
        {
          ...product,
          size,
          color,
          amount,
        },
      ];
    });
  };

  const increment = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, amount: item.amount + 1 } : item,
      ),
    );
  };

  const decrement = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.amount > 1
          ? { ...item, amount: item.amount - 1 }
          : item,
      ),
    );
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increment,
        decrement,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
