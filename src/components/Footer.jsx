import React from "react";

export const Footer = () => {
  return (
    <footer className="text-black py-10 px-5 h-[300px] flex items-center justify-center">
      <div className="w-2/3  flex items-start justify-between mx-auto">
        <div>
          <h3 className="text-lg font-semibold text-brand-primary">
            REIT Manager
          </h3>
          <div className="py-2">
            <p className="">REIT IC Asset Managers (Ghana) Limited</p>
            <p>No. 2 Johnson Sirleaf Road</p>
            <p>North Ridge – Accra, Ghana</p>
            <p>+233 (0) 30 8250 051</p>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-brand-primary">
            Custodian
          </h3>
          <div className="py-2">
            <p>Standard Chartered Bank Ghana Limited</p>
            <p>87 Independence Avenue, Accra–Ghana</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
