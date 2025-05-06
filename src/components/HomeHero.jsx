import React from "react";

export const HomeHero = () => {
  return (
    <section className="relative h-[650px]">
      <div className="relative text-white flex items-center justify-center text-center py-20 h-full">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-primary via-[rgba(22,62,128,0.8)] to-[rgba(22,62,128,0)]" />
        <h1 className="absolute top-[8rem] text-5xl font-semibold w-[450px] leading-[4rem]">
          Buy the Best Part of Accra
        </h1>
      </div>
      <div className="absolute bottom-0 w-full ">
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(22,62,128,0.2)] to-transparent z-10" />
        <img
          src="/assets/home-hero-building-cluster.png"
          alt="Home Hero"
          className="object-cover w-full"
        />
      </div>
    </section>
  );
};