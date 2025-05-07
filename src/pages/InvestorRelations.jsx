import { Briefcase } from "lucide-react";
import { Footer } from "../components/Footer";
import { FileText } from "lucide-react";
import { MessageSquare } from "lucide-react";
import { InvestorRelationsCard } from "../components/InvestorRelationsCards";
import { FileChartLine } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { MessageCircleQuestion } from "lucide-react";
import { FileSpreadsheet } from "lucide-react";
import { Newspaper } from "lucide-react";
import { FileCheck } from "lucide-react";

function InvestorRelations() {
  const investorActions = [
    {
      title: "Annual Reports & Disclosures",
      link: "/investor-relations/investment-inquiry",
      icon: <FileText strokeWidth={1} size={50} />,
      backgroundImage: "/assets/investment-bg.jpg",
    },
    {
      title: "Financial Statements",
      link: "/investor-relations/leasing",
      icon: <FileChartLine strokeWidth={1} size={50} />,
      backgroundImage: "/assets/leasing-bg.jpg",
    },
    {
      title: "FAQs",
      link: "/investor-relations/other-inquiries",
      icon: <MessageCircleQuestion strokeWidth={1} size={50} />,
      backgroundImage: "/assets/other-inquiries-bg.jpg",
    },

    {
      title: "Prospectus",
      link: "/investor-relations/other-inquiries",
      icon: (
        <FileSpreadsheet strokeWidth={1} className="-scale-x-[1]" size={50} />
      ),
      backgroundImage: "/assets/other-inquiries-bg.jpg",
    },

    {
      title: "News & Market Insights",
      link: "/investor-relations/other-inquiries",
      icon: <Newspaper size={50} strokeWidth={1} />,
      backgroundImage: "/assets/other-inquiries-bg.jpg",
    },

    {
      title: "Factsheets",
      link: "/investor-relations/other-inquiries",
      icon: <FileCheck size={50} strokeWidth={1} />,
      backgroundImage: "/assets/other-inquiries-bg.jpg",
    },
  ];

  return (
    <div className="">
      <section className="bg-brand-primary flex items-center justify-center py-24 px-5 ">
        <div className="flex flex-col items-start w-4/5 mx-auto gap-y-12">
          <div className="w-full">
            <h1 className="text-4xl text-white font-semibold">
              Investor Relations
            </h1>
          </div>
          <div className="grid grid-cols-3 w-full gap-10">
            {investorActions.map(
              ({ icon, backgroundImage, link, title }, i) => (
                <InvestorRelationsCard icon={icon} text={title} key={i} />
              )
            )}
          </div>
        </div>
      </section>
      <section className="relative  flex items-center justify-center py-10 px-5 h-[250px]">
        <img
          className="absolute -z-10"
          src="/assets/canon-tower-gray.png"
          alt="canon-tower-gray"
        />
        <div className="w-4/5 mx-auto flex flex-col items-start gap-4">
          <h1 className="text-4xl text-brand-primary font-semibold">
            Ready to Invest
          </h1>
          <button
            type="button"
            className="font-semibold bg-brand-secondary text-white rounded-full px-4 py-1"
          >
            Invest with Us
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default InvestorRelations;
