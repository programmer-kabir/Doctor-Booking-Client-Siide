import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Layout/Home";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";
import Dashboard from "../Layout/Dashboard";
import AllUser from "../Pages/Dashboard/Admin/AllUser/AllUser";
import AddDoctor from "../Pages/Dashboard/Admin/AddDoctor/AddDoctor";
import Appointment from "../Pages/Appointment/Appointment";
import UserAppoinment from "../Pages/Dashboard/User/UserAppoinment/UserAppoinment";
import Reviews from "../Pages/Dashboard/User/Reviews/Reviews";
import History from "../Pages/Dashboard/User/History/History";
import PaymentSuccess from "../Pages/Dashboard/User/Payment/PaymentSuccess/PaymentSuccess";
import PaymentFail from "../Pages/Dashboard/User/Payment/PaymentFail/PaymentFail";
import About from "../Pages/About/About";
import Revirews from "../Pages/Revirews/Revirews";
import Contact from "../Pages/Contact/Contact";

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
        path: "/about",
        element: <About />,
      },
      {
        path: "/review",
        element: <Revirews />,
      },
      {
        path: "/contact",
        element: <Contact />,
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
      {
        path: "/dashboard/my-appointment",
        element: <UserAppoinment />,
      },
      {
        path: "/dashboard/reviews",
        element: <Reviews />,
      },
      {
        path: "/dashboard/history",
        element: <History />,
      },
      {
        path: "/dashboard/payment/success/:tranId",
        element: <PaymentSuccess />,
      },
      {
        path: "/dashboard/payment/fail/:tranId",
        element: <PaymentFail />,
      },
    ],
  },
]);

export default router;
