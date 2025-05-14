import React from "react";
import { HomeHero } from "../components/HomeHero";
import Separator from "../components/Separator";
import { Footer } from "../components/Footer";
import { Container } from "../components/Container";

function Home() {
  return (
    <div className="home-page">
      <HomeHero />
      <section className="bg-brand-primary flex items-center justify-center py-10 px-5">
        <div className="flex items-center justify-between max-w-4xl mx-auto gap-x-20 h-[320px]">
          <div>
            <img src="/assets/rangoon-logo-white.png" alt="Rangoon-Logo" />
          </div>
          <div className="flex flex-col items-start w-full gap-y-4">
            <div className="h-1.5 w-1/3 bg-brand-secondary" />
            <p className="text-white text-sm w-5/6">
              Rangoon Real Estate Invest Trust (REIT) is a real estate
              investment trust established to invest directly and indirectly in
              a portfolio of income-generating real estate assets primarily used
              for commercial purposes. It aims to provide shareholders with
              stable currency -protected income distributions and long-term
              growth in the net asset value of properties.
            </p>
            <a
              href="/about-us"
              className="font-semibold bg-brand-secondary text-brand-primary rounded-full  px-4 py-1  hover:ring-1 hover:ring-white hover:ring-offset-1 active:bg-brand-secondary/80"
            >
              <span>Learn More</span>
            </a>
          </div>
        </div>
      </section>
      <section className="relative py-24 px-5 flex flex-col items-center justify-center gap-y-8">
        <img
          className=" absolute -z-10"
          src="/assets/canon-tower-gray.png"
          alt="canon-tower-gray"
        />
        <div className="w-4/5">
          <div className="flex w-full gap-40">
            <div className="w-1/3">
              <h1 className="font-semibold text-5xl leading-[3rem] text-brand-primary ">
                Property Portfolio
              </h1>
            </div>

            <div className="flex flex-col items-start w-full px-10 gap-y-5">
              <div className="flex items-center gap-3 w-full">
                <div className="bg-gray-50 w-full h-64 cursor-pointer">
                  <img
                    src="/assets/huawei/h-1.png"
                    alt="huawei-1.png"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="bg-gray-50 w-4/5 h-64 cursor-pointer">
                  <img
                    src="/assets/huawei/h-2.png"
                    alt="huawei-2.png"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <span className="text-brand-primary font-semibold text-lg">
                Huawei Building
              </span>
            </div>
          </div>
        </div>

        <div className="w-4/5">
          <div className="flex w-full gap-40">
            <div className="flex flex-col gap-y-3 w-1/3">
              <h1 className="font-semibold text-7xl leading-[2.5rem] text-gray-400 ">
                100%
              </h1>
              <span className="text-gray-400 text-xl w-full">
                Focus on Excellence
              </span>
            </div>

            <div className="flex flex-col items-start w-full gap-y-5 px-10">
              <div className="flex items-center gap-3 w-full">
                <div className="bg-gray-50 w-4/5 h-64 cursor-pointer">
                  <img
                    src="/assets/infinity-towers/inf-1.png"
                    alt="huawei-1.png"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="bg-gray-50 w-full h-64 cursor-pointer">
                  <img
                    src="/assets/infinity-towers/inf-2.png"
                    alt="huawei-2.png"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <span className="text-brand-primary font-semibold text-lg">
                Infinity Tower
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-brand-primary text-white py-10 px-5 flex items-center justify-center h-[250px]">
        <Container className="flex items-center justify-between">
          <h2 className="text-5xl font-semibold">Our Partners</h2>
          <Separator
            color="white"
            thickness="1px"
            width="50px"
            margin="0 2rem"
            vertical={true}
          />
          <div className="flex gap-x-16 items-center">
            <div className="w-60 flex items-center justify-center">
              <img
                src="/assets/goldkey-logo.png"
                alt="goldkey-logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-40 flex items-center justify-center">
              <img
                src="/assets/ic-logo-white.png"
                alt="ic-logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-40 flex items-center justify-center">
              <img
                src="/assets/standard-chartered-logo.png"
                alt="standard-chatered-logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
