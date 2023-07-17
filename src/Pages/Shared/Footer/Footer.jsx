import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-white">
        <div className="mx-auto space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">

          <div className="grid grid-cols-1 gap-8  sm:grid-cols-2 lg:grid-cols-3 lg:pt-16">
            <div>
              <p className="font-medium text-gray-900">SERVICES</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">
                  Emergency Checkup
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">
                  Monthly Checkup
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">
                  Weekly Checkup
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">
                  Deep Checkup
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-900">ORAL HEALTH</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">
                  Fluoride Treatment
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">
                  Cavity Filling
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">
                  Teath Whitening
                  </a>
                </li>
              </ul>
            </div>

            <div className="">
              <p className="font-medium  text-gray-900">OUR ADDRESS Links</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">
                  New York - 101010 Hudson
                  </a>
                </li>

              </ul>
            </div>


          </div>

          <p className="text-base text-center text-gray-500">
            &copy; Copyright 2022 All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
