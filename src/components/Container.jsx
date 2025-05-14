import React from "react";

export const Container = ({ children, className = "" }) => {
  return (
    <div className={`w-4/5 mx-auto ${className}`}>
      {children}
    </div>
  );
};
