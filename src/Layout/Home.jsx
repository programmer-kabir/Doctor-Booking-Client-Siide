import React from "react";
import Banner from "../Pages/Home/Banner/Banner";
import Hero from "../Pages/Home/Hero/Hero";
import Services from "../Pages/Home/Services/Services";
import Appointment from "../Pages/Home/Appointment/Appointment";
import Emran from "../Pages/Emran";

const Home = () => {
  return (
    <div>
      <Banner />
      <Hero />
      <Services />
      <Appointment />
      {/* <Emran /> */}
    </div>
  );
};

export default Home;
