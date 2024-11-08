import { ReactElement } from "react";

export const Hero = (): ReactElement => {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0">
        <img
          src="/images/hero.webp"
          alt="hero"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative flex flex-col xl:ml-40 top-1/2 transform -translate-y-1/2 mx-4 sm:mx-8 xl:mx-0 items-center xl:items-start text-center xl:text-left">
        <h1 className="lg:w-[42rem] text-white">Lorem Ipsum</h1>
        <h3 className="w-[40rem] mt-6 hidden lg:flex text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h3>
      </div>
    </div>
  );
};
