import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div>
      <nav className="border-gray-200 dark:bg-gray-900">
        <div className="max-w-[90%] my-4 shadow-2xl border border-[#00A3FF] bg-[#EEE5FF] rounded-3xl flex flex-wrap items-center justify-between mx-auto p-3">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="/images/logo.png" className="h-12" alt="hakim Logo" />
          </a>
          <button
            onClick={toggleNav}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isNavOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`w-full md:w-auto md:block text-[18px] ${
              isNavOpen ? "" : "hidden"
            }`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-[] dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#podcast"
                  className="block text-[18px] py-2 px-3 mt-2 mx-6 text-black font-bold rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  Podcast
                </a>
              </li>
              <li>
                <a
                  href="#post"
                  className="block text-[18px] py-2 px-3 mt-2 mx-6 font-bold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Post
                </a>
              </li>
              <li>
                <a
                  href="#ads"
                  className="block text-[18px] py-2 px-3 mt-2 mx-6 font-bold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Advertisment
                </a>
              </li>
              <Link to="/login">
                <li className="px-3 w-[40%] sm:w-full ml-7 sm:ml-0 sm:px-8 rounded-full py-2 border border-[#00A3FF] mb-1">
                  <a
                    href="/login"
                    className="block text-[16px] text-center py-2 text-[#00A3FF]] rounded-full font-bold hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Login
                  </a>
                </li>
              </Link>
              <Link to="/subscription">
                <li className="px-3 ml-7 mt-1 sm:mt-0 sm:ml-0 w-[40%] sm:w-full py-[0.1px] rounded-full text-center bg-[#00A3FF]">
                  <a
                    href="/subscription"
                    className="block text-[16px]text-center  my-3  px-3  text-white fontbold hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Subscribe
                  </a>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;