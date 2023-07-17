import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineMenuAlt2, HiOutlineMenuAlt3 } from "react-icons/hi";
import Container from "../../../Component/Container/Container";
import useAuth from "../../../Component/Hooks/UseAuth";
const Navbar = () => {
  const { user } = useAuth()
  const [navbar, setNavbar] = useState(false);
  const activeLink =
    "text-white rounded px-3 py-1 transition-colors duration-500 bg-[#3A4256]";
  return (
    <Container>
      <nav className="w-full bg-whit">
        <div className="justify-between mx-auto  md:items-center md:flex">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link className="flex items-center">

                <h2 className="text-2xl font-bold">Doctors Portal</h2>
              </Link>
              <div className="md:hidden">
                <button
                  className=" text-gray-700 rounded-md outline-none"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <HiOutlineMenuAlt3 className="w-6 h-6"></HiOutlineMenuAlt3>
                  ) : (
                    <HiOutlineMenuAlt2 className="w-6 h-6"></HiOutlineMenuAlt2>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center text-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-lg  text-gray-600 hover:text-blue-600">
                  <NavLink
                    className={({ isActive }) => (isActive ? activeLink : "")}
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="text-gray-600 hover:text-blue-600">
                  <NavLink
                    className={({ isActive }) => (isActive ? activeLink : "")}
                    to="/instructor"
                  >
                    About
                  </NavLink>
                </li>
                <li className="text-gray-600 hover:text-blue-600">
                  <NavLink
                    className={({ isActive }) => (isActive ? activeLink : "")}
                    to="/Appointment"
                  >
                    Appointment
                  </NavLink>
                </li>

                <li className="text-gray-600 hover:text-blue-600">
                  <NavLink
                    className={({ isActive }) => (isActive ? activeLink : "")}
                    to="/course"
                  >
                    Reviews
                  </NavLink>
                </li>
                <li className="text-gray-600 hover:text-blue-600">
                  <NavLink
                    className={({ isActive }) => (isActive ? activeLink : "")}
                    to="/course"
                  >
                    Contact Us
                  </NavLink>
                </li>

                {user ? (
                  <li>
                    <NavLink
                      className={({ isActive }) => (isActive ? activeLink : "")}
                      to="/dashboard"
                    >
                      Dashboard
                    </NavLink>
                  </li>
                ) : (
                  <li className="text-gray-600 hover:text-blue-600">
                    <NavLink
                      className={({ isActive }) => (isActive ? activeLink : "")}
                      to="/login"
                    >
                      Login
                    </NavLink>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
