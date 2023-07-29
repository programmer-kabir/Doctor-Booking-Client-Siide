import React from "react";
import Sidebar from "../Pages/Dashboard/Sidebar";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Dashboard = () => {
  return (
    <>
      <Navbar/>
      <div className="md:flex mt-5">
        <Sidebar />
        <div className="flex-1">
          <div className="p-5">
            <Outlet />
          </div>
          
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;