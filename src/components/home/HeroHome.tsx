import React from "react";
import { Button } from "../ui/button";

function HeroHome() {
  return (
    <div
      className="relative justify-between
     bg-black pb-[7rem] lg:h-[632px]"
    >
      <div className="container relative flex  flex-col items-center pt-[6.75rem] text-center  md:pt-[8rem] lg:px-0">
        <div className="relative z-40">
          <p className=" text-sm font-thin uppercase  tracking-[10px] text-white/50">
            New Product
          </p>
          <h1 className="heading-xl mx-auto mt-4 max-w-[396px] text-wrap uppercase text-white md:mt-6 lg:mx-0">
            XX99 Mark II Headphones
          </h1>
          <p className="mx-auto mb-7 mt-6 max-w-[350px] text-white/75 md:mb-10 lg:mx-0">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button>See Product</Button>
        </div>

        <div className=" xs:-top-[10vw] absolute -top-[24vw] z-10 w-full md:-top-[12vw]  lg:top-0 ">
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet="assets/home/desktop/image-hero.jpg"
            />
            <source
              media="(min-width: 460px)"
              srcSet="assets/home/tablet/image-header.jpg"
            />
            <img
              src="assets/home/mobile/image-header.jpg"
              alt=""
              className="absolute  -z-10  mb-10 "
            />
          </picture>
        </div>
      </div>
    </div>
  );
}

export default HeroHome;
