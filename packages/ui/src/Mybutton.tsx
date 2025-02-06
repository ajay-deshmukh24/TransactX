"use client";
// import { Button } from "./button";

export const Mybutton = () => {
  return (
    <>
      <button
        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
        onClick={() => alert("Button Clicked!")}
      >
        Click Me
      </button>
      {/* <Button onClick={() => "hi"}>hi</Button> */}
    </>
  );
};
