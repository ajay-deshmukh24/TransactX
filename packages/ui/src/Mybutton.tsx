"use client";

export const Mybutton = () => {
  return (
    <button
      className="text-lg px-6 py-3 bg-blue-600 text-black font-semibold rounded-lg transition duration-300 hover:bg-red-700 hover:text-white"
      onClick={() => alert("Button Clicked!")}
    >
      Click Me
    </button>
  );
};
