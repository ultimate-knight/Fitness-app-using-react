import React from "react";
import Button from "./Button";  // Make sure to import the Button component

export default function Hero() {
  return (
    <div
      className="min-h-screen flex flex-col gap-10 items-center justify-center text-center w-full mx-auto p-4"
    >
      <div className="flex flex-col gap-4">
        <p>IT'S TIME TO GET</p>
        <h1 className="uppercase font-bold text-4xl sm:text-5xl md:text-7xl lg:text-8xl w-full mx-auto">
          ENORMOUS<span className="text-blue-400 font-medium"> MASS</span>
        </h1>
      </div>

      <p className="text-sm md:text-base font-light">
        Every drop of sweat, every sore muscle, and every
        <span className="text-blue-400 font-medium">
          rep is a testament to your commitment and determination.
        </span>
        In the gym,
        <span className="text-blue-400 font-medium">
          you are not just building a stronger body, but also a stronger mind.
        </span>
        The weights may be heavy, but the satisfaction of pushing past your
        limits is worth every effort.
      </p>
      <Button text={'Accept and Begin'}></Button>
    </div>
  );
}
