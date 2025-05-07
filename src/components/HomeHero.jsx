import React from "react";

export const HomeHero = () => {
  return (
    <section className="relative h-[650px]">
      <div className="relative text-white flex items-center justify-center text-center py-20 h-full">
        {/* Gradient overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-brand-primary via-[rgba(22,62,128,0.8)] to-[rgba(22,62,128,0)]" /> */}
        <h1 className="absolute top-[12rem] text-6xl font-semibold w-[450px] leading-[4rem]">
          Buy the Best Part of Accra
        </h1>
        <img
          src="/assets/hero-bg.png"
          alt="hero-bg"
          className="absolute -z-10"
        />
      </div>
    </section>
  );
};
