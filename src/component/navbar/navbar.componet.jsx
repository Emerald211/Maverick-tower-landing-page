import "./navbar.styles.css";
import { useState } from "react";

import logo from "../../assets/Maverick 1.png"
import Button from "../button/button.component";
const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <>
      <nav className="navigation">
        <a href="/" className="brand-name">
          <img width="80px" src={logo} alt="" />
        </a>
        <button
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
          className="hamburger"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "auto",
                          }}
                          
                          className=" nav-list"
            >
              <li>
                <a href="/home">Home</a>
              </li>
              <li>
                <a href="/about">Our Services</a>
              </li>
              <li>
                <a href="/contact">Case Studies</a>
              </li>
              <li>
                <a href="/contact">Blog</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </div>
          </ul>
        </div>
           <Button text="Schedule a call" />
      </nav>
    </>
  );
};

export default Navbar;
