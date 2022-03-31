import React from "react";
import Link from "next/link";

const Navigation = () => {
  return (
    <div className="flex justify-center">
      <div className="fixed z-50 visible transition-opacity duration-200 lg:invisible right-3 top-8">
        <div className="p-4 space-y-2 shadow">
          <span className="block w-8 h-0.5 bg-gray-100 animate-pulse"></span>
          <span className="block w-8 h-0.5 bg-gray-100 animate-pulse"></span>
          <span className="block w-8 h-0.5 bg-gray-100 animate-pulse"></span>
        </div>
      </div>

      <div className="fixed z-50 invisible px-5 py-2 transition-all duration-200 bg-white border border-transparent border-gray-200 lg:visible rounded-2xl -top-20 lg:top-8 bg-blackbg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 opacity-10 hover:opacity-100">
        <div className="flex gap-3">
          <Link href="#header">
            <a href="#header">
              <div className="p-2 text-white transition-all duration-300 bg-gray-800 border-2 rounded-md hover:p-3 hover:rounded-full hover:-m-1 hover:-translate-y-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              </div>
            </a>
          </Link>
          <Link href="#services">
            <a href="#services">
              <div className="p-2 duration-300 bg-gray-800 border-2 rounded-md hover:p-3 hover:rounded-full hover:-m-1 hover:-translate-y-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                </svg>
              </div>
            </a>
          </Link>
          <Link href="#about">
            <a href="#about">
              <div className="p-2 text-white duration-300 bg-gray-800 border-2 rounded-md hover:p-3 hover:rounded-full hover:-m-1 hover:-translate-y-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </a>
          </Link>

          <Link href="#experience">
            <a href="#experience">
              <div className="p-2 duration-300 bg-gray-800 border-2 rounded-md hover:p-3 hover:rounded-full hover:-m-1 hover:-translate-y-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
                  <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
                  <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
                </svg>
              </div>
            </a>
          </Link>
          <Link href="#portfolio">
            <a href="#portfolio">
              <div className="p-2 duration-300 bg-gray-800 border-2 rounded-md hover:p-3 hover:rounded-full hover:-m-1 hover:-translate-y-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
            </a>
          </Link>
          <Link href="#contact">
            <a href="#contact">
              <div className="p-2 duration-300 bg-gray-800 border-2 rounded-md hover:p-3 hover:rounded-full hover:-m-1 hover:-translate-y-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
