import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineMenuAlt2, HiOutlineMenuAlt3 } from "react-icons/hi";
import Container from "../../../Component/Container/Container";
import useAuth from "../../../Component/Hooks/UseAuth";
import logo from "../../../assets/Logo/logo.svg";
const Navbar = () => {
  const { user } = useAuth();
  const [nav, setNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const activeLink =
    "text-white rounded px-3 py-1 transition-colors duration-500 bg-[#F7A582]";
  return (
    <nav className="w-full text-white md:pb-20">
      <div className=" mx-auto ">
        <div className="flex z-50 justify-between items-center text-white">
          <Link to="/" className="flex items-center gap-2">
            <img className="h-10 w-10 " src={logo} alt="" />
            <h2 className="text-2xl font-bold">
              <span className="text-[#F7A582]">Doc</span> House
            </h2>
          </Link>
          <div className="hidden md:flex gap-8 items-center font-medium p-4">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activeLink : "")}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? activeLink : "")}
            >
              About
            </NavLink>
            <NavLink
              to="/Appointment"
              className={({ isActive }) => (isActive ? activeLink : "")}
            >
              Appointment
            </NavLink>

            {user ? (
              <>
                <div className="relative">
                  <button onClick={() => setIsOpen(!isOpen)}>
                    <img
                      className="w-10 h-10 rounded-full"
                      src={user.photoURL}
                      alt=""
                    />
                  </button>

                  {isOpen && (
                    <div
                      className="absolute right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-10"
                      onMouseLeave={() => setIsOpen(false)}
                    >
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-600 hover:text-white"
                      >
                        View Profile
                      </Link>
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-600 hover:text-white"
                      >
                        Edit Profile
                      </Link>
                      <Link
                        onClick={handleLogOut}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-600 hover:text-white"
                      >
                        Logout
                      </Link>
                    </div>
                  )}
                </div>
                {/* <NavLink onClick={handleLogOut}>Logout</NavLink> */}
              </>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className={({ isActive }) => (isActive ? activeLink : "")}
                >
                  Login
                </NavLink>
              </>
            )}
          </div>

          <div onClick={handleNav} className="block  md:hidden">
            {nav ? (
              <HiOutlineMenuAlt3 size={20} className="" />
            ) : (
              <div className="flex items-center gap-2 font-semibold">
                <HiOutlineMenuAlt2 size={20} className="" />
              </div>
            )}
          </div>
          <div
            className={
              nav
                ? "fixed  left-0 top-0 w-[80%] h-full px-6 text-center border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
                : "ease-in-out duration-500 fixed left-[-100%]"
            }
          >
            <div className="flex flex-col p-0 gap-5">
              <h1 className="w-full text-start text-3xl font-bold text-[#00df9a] m-4">
                <Link to='/'>
                REACT.
                </Link>
              </h1>
              <NavLink
                className={({ isActive }) => (isActive ? activeLink : "")}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? activeLink : "")}
              >
                About
              </NavLink>
              <NavLink
                to="/s"
                className={({ isActive }) => (isActive ? activeLink : "")}
              >
                Admission
              </NavLink>
              <NavLink
                to="/s"
                className={({ isActive }) => (isActive ? activeLink : "")}
              >
                Admission
              </NavLink>
              <NavLink
                to="/s"
                className={({ isActive }) => (isActive ? activeLink : "")}
              >
                Login
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
