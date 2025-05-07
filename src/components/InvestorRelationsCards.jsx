import React from "react";

export const InvestorRelationsCard = ({
  backgroundImage,
  icon,
  text,
  bgColor = "bg-brand-secondary", // Default background color
}) => {
  return (
    <div
      className={`relative w-full h-64 rounded-3xl overflow-hidden flex items-center justify-center max-h-[200px] cursor-pointer px-10 py-5 ${
        backgroundImage ? "" : bgColor
      }`}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-40" /> */}

      {/* Content */}
      <div className="relative z-10 w-full h-full  text-white ">
        {icon && <div className="text-5xl absolute top-0 right-0">{icon}</div>}
        {text && (
          <p className="text-xl  absolute bottom-0 left-0 w-32">
            {text}
          </p>
        )}
      </div>
    </div>
  );
};
