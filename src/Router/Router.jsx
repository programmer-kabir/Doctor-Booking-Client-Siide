import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Layout/Home";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";
import Dashboard from "../Layout/Dashboard";
import AllUser from "../Pages/Dashboard/Admin/AllUser/AllUser";
import AddDoctor from "../Pages/Dashboard/Admin/AddDoctor/AddDoctor";
import Appointment from "../Pages/Appointment/Appointment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/Appointment",
        element: <Appointment />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/all-users",
        element: <AllUser />,
      },
      {
        path: "/dashboard/add-doctor",
        element: <AddDoctor />,
      },
    ],
  },
]);

export default router;
