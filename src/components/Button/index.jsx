import React from "react";

function Button({ text }) {
  return (
    <button className="bg-none border-gray-300 border rounded-full !py-1.5 !px-10 hover:bg-gray-700 hover:text-gray-100 shadow-gray-700 hover:shadow-lg hover:border-gray-700 hover:border transition duration-300 ease-in-out ">
      {text}
    </button>
  );
}

export default Button;
