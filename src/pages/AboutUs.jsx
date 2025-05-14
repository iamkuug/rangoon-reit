import { Footer } from "../components/Footer";

function AboutUs() {
  return (
    <div className="about-us-page">
      {/* First Section */}
      <section className="relative flex items-center justify-center py-10 px-5 h-[350px]">
        <img
          className="absolute -z-10 w-full object-cover"
          src="/assets/about-us-bg-1.png"
          alt="canon-tower-gray"
        />
        <div className="flex  items-center w-4/5 mx-auto gap-y-6">
          <div className="w-full ">
            <h1 className="text-5xl text-brand-primary font-semibold">
              About Us
            </h1>
            <h1 className="text-5xl text-brand-primary font-semibold">
              Who we are
            </h1>
          </div>
          <div className="text-brand-primary w-4/5 ">
            <p>
              Rangoon Real Estate Invest Trust (REIT) is a real estate
              investment trust established to invest directly and indirectly in
              a portfolio of income-generating real estate assets primarily used
              for commercial purposes. It aims to provide shareholders with
              stable currency-protected income distributions and long-term
              growth in the net asset value of properties.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white flex flex-col justify-center py-10 px-5 gap-y-4">
        <div className="w-4/5 mx-auto flex flex-col items-start gap-4">
          <h1 className="text-5xl text-brand-primary font-semibold">
            REIT Structure
          </h1>
        </div>
        <div className="w-full mx-auto">
          <img
            className="w-4/5 mx-auto h-full object-cover"
            src="/assets/rangoon-structure-diagram.png"
            alt="canon-tower-gray"
          />
        </div>
      </section>

      {/* Third Section */}
      <section className="relative flex items-center justify-center py-10 px-5 h-[280px]">
        <img
          className="absolute -z-10 w-full object-cover"
          src="/assets/about-us-bg-2.png"
          alt="canon-tower-gray"
        />
        <div className="w-4/5 mx-auto flex flex-col items-start gap-4">
          <h1 className="text-5xl text-white font-semibold">Ready to Invest</h1>
          <a
            href="https://onboarding.ic.africa"
            target="_blank"
            rel="noreferrer"
            className="font-semibold bg-brand-secondary text-brand-primary rounded-full px-4 py-1 hover:ring hover:ring-white transition-all ease-in-out flex items-center justify-center active:bg-brand-secondary/80"
          >
            Invest with Us
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default AboutUs;
