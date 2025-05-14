import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ className }) => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`flex items-center justify-between px-8 py-4 ${
        isActive("/") ? "bg-transparent" : "bg-brand-primary"
      } ${className}`}
    >
      <a href="/">
        <img alt="ic-logo" src="/assets/ic-logo-white.png" className="w-20" />
      </a>
      <ul className="flex  text-white text-sm">
        <li>
          <Link
            to="/"
            className={`px-4 py-1.5 ${
              isActive("/") ? "bg-brand-accent rounded-full" : ""
            }`}
          >
            HOME
          </Link>
        </li>
        <li>
          <Link
            to="/about-us"
            className={`px-4 py-1.5 ${
              isActive("/about-us") ? "bg-brand-accent rounded-full" : ""
            }`}
          >
            ABOUT US
          </Link>
        </li>
        <li>
          <Link
            to="/investor-relations"
            className={`px-4 py-1.5 ${
              isActive("/investor-relations")
                ? "bg-brand-accent rounded-full"
                : ""
            }`}
          >
            INVESTOR RELATIONS
          </Link>
        </li>
        <li>
          <Link
            to="/get-in-touch"
            className={`px-4 py-1.5 ${
              isActive("/get-in-touch") ? "bg-brand-accent rounded-full" : ""
            }`}
          >
            GET IN TOUCH
          </Link>
        </li>
        <li>
          <Link
            to="/property-portfolio"
            className={`px-4 py-1.5 ${
              isActive("/property-portfolio")
                ? "bg-brand-accent rounded-full"
                : ""
            }`}
          >
            PROPERTY PORTFOLIO
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
