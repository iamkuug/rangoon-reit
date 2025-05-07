import { Footer } from "../components/Footer";

function AboutUs() {
  return (
    <div className="about-us-page">
      {/* First Section */}
      <section className="bg-gray-50 flex items-center justify-center py-10 px-5 h-[350px]">
        <div className="flex  items-center w-4/5 mx-auto gap-y-6">
          <div className="w-full ">
            <h1 className="text-4xl text-brand-primary font-semibold">
              About Us
            </h1>
            <h1 className="text-4xl text-brand-primary font-semibold">
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

      <section className="bg-white flex justify-center py-10 px-5 h-[500px]">
        <div className="w-4/5 mx-auto flex flex-col items-start gap-4">
          <h1 className="text-4xl text-brand-primary font-semibold">
            REIT Structure
          </h1>
        </div>
      </section>

      {/* Third Section */}
      <section className="bg-brand-primary flex items-center justify-center py-10 px-5 h-[250px]">
        <div className="w-4/5 mx-auto flex flex-col items-start gap-4">
          <h1 className="text-4xl text-white font-semibold">Ready to Invest</h1>
          <button
            type="button"
            className="font-semibold bg-brand-secondary text-brand-primary rounded-full px-4 py-1"
          >
            Invest with Us
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default AboutUs;
