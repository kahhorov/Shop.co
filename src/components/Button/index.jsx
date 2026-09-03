import React from "react";

function Button({ text }) {
  return (
    <button className="bg-none border-gray-300 border rounded-full !py-1.5 !px-10">
      {text}
    </button>
  );
}

export default Button;
