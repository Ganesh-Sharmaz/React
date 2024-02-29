import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className=" sticky top-0 z-50 shadow-lg border-b border-gray-800">
      <nav className=" bg-black border-gray-300 shadow-lg px-4 sm:px-6 py-2.5">
        <div className="  flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className=" flex items-baseline">
            <p className=" text-white flex text-[45px]  font-bold font-sans ">
              Take
            </p>
            <p className="text-red-600  text-[50px] font-bold font-sans">
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

          {/* mobile icon starts here */}

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="relative inline-flex mr-8 p-2 sm:hidden items-baseline justify-center rounded-md text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="absolute -inset-0.5"></span>
            <span className="sr-only">Open main menu</span>

            <svg
              className="block h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>

            <svg
              className="hidden h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div
            className={` flex flex-col text-center sm:hidden justify-between items-center w-full sm:w-auto sm:order-1 pb-2 ${
              open ? "flex" : "hidden"
            } transition-all duration-500 ease-in `}
          >
            <ul className=" flex flex-col sm:flex-row mt-4 sm:mt-0 sm:space-x-8 space-y-2 ">
              <li className="transition-all ease-in-out duration-1000">
                <NavLink
                  to="/"
                  className={({isActive}) =>
                  `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-white"} b border-gray-100  lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
                >
                  Home
                </NavLink>
              </li>
              <li className="transition-all ease-in-out duration-1000">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `font-semibold text-white block py-1 duration-300 pl-3  pr-4 ${isActive ? "text-orange-700" : "text-white"} hover:border-gray-400  border-b-slate-900 hover:text-orange-400`
                  }
                >
                  About
                </NavLink>
              </li>
              <li className="transition-all ease-in-out duration-1000">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `font-semibold text-white block py-1 duration-300 pl-3  pr-4 ${
                      isActive ? "text-orange-400" : "text-white"
                    } hover:border-gray-400 border-b-slate-900 hover:text-orange-400`
                  }
                >
                  Contact Us
                </NavLink>
              </li>
              <li className="transition-all ease-in-out duration-1000">
                <NavLink
                  to="/github"
                  className={({ isActive }) =>
                    `font-semibold text-white block py-1 duration-300 pl-3  pr-4 ${
                      isActive ? "text-orange-400" : "text-white"
                    } hover:border-gray-400 border-b-slate-900 hover:text-orange-400`
                  }
                >
                  Github
                </NavLink>
              </li>
              <li className=" pb-2 transition-all ease-in-out duration-1000">
                <Link
                  to="#"
                  className=" text-white hover:text-gray-800 px-4 py-2 rounded-lg font-medium text-base focus:ring-2 hover:shadow-md focus:ring-gray-300 focus:outline-none hover:bg-slate-300 transition-all"
                >
                  Log in
                </Link>
              </li>
              <li className=" py-2 pb-3 transition-all ease-in-out duration-1000">
                <Link
                  to="#"
                  className=" bg-orange-600 text-white font-sans font-medium hover:bg-orange-700 px-4  py-2 focus:ring-2 focus:ring-orange-300 rounded-lg shadow-md text-base focus:outline-none"
                >
                  Get Started
                </Link>
              </li>
            </ul>
          </div>

          {/* mobile icon ends here */}

          <div className=" hidden sm:flex justify-between items-center w-full sm:w-auto sm:order-1">
            <ul className=" flex flex-col sm:flex-row mt-4 sm:mt-0 sm:space-x-8">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    ` font-semibold text-white block py-1 duration-300 pl-3  pr-4 ${
                      isActive ? "text-orange-400" : "text-white"
                    } hover:border-gray-400 border-b border-b-slate-900 hover:text-orange-400`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `font-semibold text-white block py-1 duration-300 pl-3  pr-4 ${
                      isActive ? "text-orange-400" : "text-white"
                    } hover:border-gray-400 border-b border-b-slate-900 hover:text-orange-400`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `font-semibold text-white block py-1 duration-300 pl-3  pr-4 ${
                      isActive ? "text-orange-400" : "text-white"
                    } hover:border-gray-400 border-b border-b-slate-900 hover:text-orange-400`
                  }
                >
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/github"
                  className={({ isActive }) =>
                    `font-semibold text-white block py-1 duration-300 pl-3  pr-4 ${
                      isActive ? "text-orange-400" : "text-white"
                    } hover:border-gray-400 border-b border-b-slate-900 hover:text-orange-400`
                  }
                >
                  Github
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
