import React, { useState } from "react";
import Container from "../../Component/Container/Container";
import { Link, NavLink } from "react-router-dom";
import { BsFillBookmarkCheckFill, BsFillBookmarkFill } from "react-icons/bs";
import { BiHistory, BiLogOut, BiSolidBook } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import useAuth from "../../Component/Hooks/UseAuth";
import useAdmin from "../../Component/Hooks/useAdmin";

const Sidebar = () => {
  const [isAdmin, isAdminLoading] = useAdmin()
  const { user, logOut, loading, setLoading } = useAuth();

if(isAdminLoading){
  return <>sfa</>
}
  const activeLink = "text-pink-600 transition-colors duration-500";
  const handleLogout = () => {
    logOut().then();
  };
//   if (loading || isAdminLoading) {
//     return loading..........;
//   }

  return (
    <Container>
      <div className="px-5 mb-8 mx-auto text-center">
        <img
          className="w-20 h-20 mx-auto rounded-full"
          src={user?.photoURL}
          alt=""
        />
        <h2 className="font-semibold pt-5 pb-2">{user?.displayName}</h2>
       
      </div>
      <div>
        <ul className="items-center  justify-center md:space-y-5 md:space-x-0">
          {isAdmin ?
            <>
              <li className="text-black hover:text-blue-600">
                <NavLink
                  className={({ isActive }) => (isActive ? activeLink : "")}
                  to="all-users"
                >
                  <span className="flex items-center  gap-1 ">
                    <FaUsers className="w-5 h-7" />
                    All Users
                  </span>
                </NavLink>
              </li>
              <li className="text-black hover:text-blue-600">
                <NavLink
                  className={({ isActive }) => (isActive ? activeLink : "")}
                  to="add-doctor"
                >
                  <span className="flex items-center  gap-1 ">
                    Add a Doctor
                  </span>
                </NavLink>
              </li>
            </>:
            <>
            <li className="text-black hover:text-blue-600">
                <NavLink
                  className={({ isActive }) => (isActive ? activeLink : "")}
                  to="booked-course"
                >
                  <span className="flex items-center  gap-1 ">
                    <BsFillBookmarkCheckFill className="w-5 h-7" /> Booked
                    Course
                  </span>
                </NavLink>
              </li>
              <li className="text-black hover:text-blue-600">
                <NavLink
                  className={({ isActive }) => (isActive ? activeLink : "")}
                  to="enrolled-course"
                >
                  <span className="flex items-center  gap-1 ">
                    <BsFillBookmarkFill className="w-5 h-7" /> Enrolled Course
                  </span>
                </NavLink>
              </li>
              <li className="text-black hover:text-blue-600">
                <NavLink
                  className={({ isActive }) => (isActive ? activeLink : "")}
                  to="payment-history"
                >
                  <span className="flex items-center  gap-1 ">
                    <BiHistory className="w-5 h-7" /> Payment History
                  </span>
                </NavLink>
              </li>
            </>
          }
          
          
          <li className="text-black hover:text-blue-600">
            <NavLink
              className={({ isActive }) => (isActive ? activeLink : "")}
              to="/"
            >
              <span className="flex gap-1 items-center" onClick={handleLogout}>
                <BiLogOut className="w-5 h-7" /> Logout
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default Sidebar;
