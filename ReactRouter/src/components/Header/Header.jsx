import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className=" sticky top-0 z-50 shadow-lg border-b border-gray-800">
      <nav className=" bg-black border-gray-300 shadow-lg px-4 sm:px-6 py-2.5">
        <div className="  flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className=" flex items-baseline">
            <p className=" text-white flex text-4xl  font-bold font-mono ">
              Take
            </p>
            <p className="text-red-600  text-4xl font-bold font-mono">
              Travels
            </p>
          </Link>
          <div className="hidden sm:flex items-center sm:order-2">
            <Link
              to="#"
              className=" text-white hover:text-gray-800 px-4 py-2 rounded-lg font-medium text-sm focus:ring-2 hover:shadow-md focus:ring-gray-300 focus:outline-none hover:bg-slate-300 transition-all"
            >
              Log in
            </Link>
            <Link
              to="#"
              className=" bg-orange-600 text-white font-sans font-medium hover:bg-orange-700 px-4 ml-2 py-2 focus:ring-2 focus:ring-orange-300 rounded-lg shadow-md text-sm focus:outline-none transition-all"
            >
              Get Started
            </Link>
          </div>

          <div className=" hidden sm:flex justify-between items-center w-full sm:w-auto sm:order-1">
            <ul className=" flex flex-col sm:flex-row mt-4 sm:mt-0 sm:space-x-8">
              <li>
                <NavLink
                to="/"
                className={({isActive}) => ` font-semibold text-white block py-1 duration-300 pl-3  pr-4 ${isActive ? "text-orange-400" : "text-white"} hover:border-gray-400 border-b border-b-slate-900 hover:text-orange-400`}  >Home</NavLink>
              </li>
              <li>
                <NavLink
                to="/about"
                className={({isActive}) => `font-semibold text-white block py-1 duration-300 pl-3  pr-4 ${isActive ? "text-orange-400" : "text-white"} hover:border-gray-400 border-b border-b-slate-900 hover:text-orange-400`}>About</NavLink>
              </li>
              <li>
                <NavLink
                to="/contact"
                className={({isActive}) => `font-semibold text-white block py-1 duration-300 pl-3  pr-4 ${isActive ? "text-orange-400" : "text-white"} hover:border-gray-400 border-b border-b-slate-900 hover:text-orange-400`}>Contact Us</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
