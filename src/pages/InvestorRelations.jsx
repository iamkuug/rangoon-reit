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
      icon: <FileText strokeWidth={1.3} size={50} />,
      backgroundImage: "https://goldkeyghana.com/wp-content/uploads/2025/02/IMG_1174-scaled-1.jpg",
    },
    {
      title: "Financial Statements",
      link: "/investor-relations/leasing",
      icon: <FileChartLine strokeWidth={1.3} size={50} />,
      backgroundImage: "https://citinewsroom.com/wp-content/uploads/2021/05/Cannon-House-Ernst-Young-750x375.jpeg",
    },
    {
      title: "FAQs",
      link: "/investor-relations/other-inquiries",
      icon: <MessageCircleQuestion strokeWidth={1.3} size={50} />,
      backgroundImage: "https://marcopolis.net/wp-content/uploads/Ghana_Report/2020/company_profiles/goldkey_properties/PwC_Tower.jpg",
    },

    {
      title: "Prospectus",
      link: "/investor-relations/other-inquiries",
      icon: (
        <FileSpreadsheet strokeWidth={1.3} className="-scale-x-[1]" size={50} />
      ),
      backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGbOhsJgEeIVDNGgWwx-4FYmLmIX7CBIEnWend_uiymXgooz2w9SZGNBiHpC4b_hiFXM8&usqp=CAU"
    },

    {
      title: "News & Market Insights",
      link: "/investor-relations/other-inquiries",
      icon: <Newspaper size={50} strokeWidth={1.3} />,
      backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTwK7Ig-2Wm29FE_FeQhelFHOvItRnyUzlM6gc3D2oRtHBHLgzx8UFCkyqm3AG3SMRtr4&usqp=CAU",
    },

    {
      title: "Factsheets",
      link: "/investor-relations/other-inquiries",
      icon: <FileCheck size={50} strokeWidth={1.3} />,
      backgroundImage: "https://meqasa.com/uploads/imgs/ecec878867b32953568176d107a630a6"
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
                <InvestorRelationsCard icon={icon} text={title} key={i} backgroundImage={backgroundImage} />
              )
            )}
          </div>
        </div>
      </section>
      <section className="relative  flex items-center justify-center py-10 px-5 h-[400px]">
        <img
          className="absolute -z-10"
          src="/assets/investor-relations-bg.png"
          alt="canon-tower-gray"
        />
        <img
          className="absolute right-[200px] w-[350px] bottom-0"
          src="/assets/investor-relations-illustration.png"
          alt="canon-tower-gray"
        />
        <div className="w-4/5 mx-auto flex flex-col items-start gap-4">
          <h1 className="text-5xl text-brand-primary font-semibold">
            Ready to Invest?
          </h1>
          <a
            href="https://onboarding.ic.africa"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold bg-brand-secondary text-white rounded-full px-4 py-1 hover:ring-2 hover:ring-brand-secondary hover:ring-offset-1 active:bg-brand-secondary/80"
          >
            Invest with Us
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default InvestorRelations;
