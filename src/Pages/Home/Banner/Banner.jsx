import React from "react";
import banner from "../../../assets/Banner/chair 1.png";
import Container from "../../../Component/Container/Container";
import Navbar from "../../Shared/Navbar/Navbar";
import icon1 from "./Icon/icon-1.svg";
import icon2 from "./Icon/icon-2.svg";
import icon3 from "./Icon/icon-3.svg";
const Banner = () => {
  return (
    <div className="bg-[#242b2a] h-[700px] text-white">
      <Container>
        <Navbar />
        <img className="absolute md:-mt-16 ml-[150px] md:ml-[470px] h-[150px] md:h-[200px] rotate-45" src={icon2} alt="" />
        <div className="grid md:grid-cols-2 text-center md:text-left">
          <div className="space-y-5 mt-14 ">
            <h2 className="text-5xl font-semibold">
              Your Best Medical Help Center
            </h2>
            <p className="text-justify">
              Lorem Ipsum is simply dummy text they are printing typesetting has
              been <br /> the industry’s stardard.
            </p>
            <button className="primary-btn">All Service</button>
          </div>
          <div className="pt-10 md:pt-0">
            <div className="relative ">
              <img
                className="absolute border-8 border-white md:w-[280px] w-[160px] h-[160px] md:h-[280px] rotate-6 "
                src="https://i.ibb.co/6nkr4zp/header-1.jpg"
                alt=""
              />
              <img
                className="absolute border-8 border-white md:mt-40 mt-20 ml-20 md:ml-40 h-[160px] w-[160px] md:w-[280px] md:h-[280px] rotate-6 "
                src="https://i.ibb.co/nsWqvnJ/header-2.jpg"
                alt=""
              />
              <img
                className="absolute border-8 border-white md:w-[280px] w-[160px] h-[160px] md:h-[280px] rotate-6 md:ml-[325px] ml-[178px]"
                src="https://i.ibb.co/QHv4Fkn/header-3.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </Container>
      <div className="">
        <img className="absolute top-0 -left-2 h-[100px] md:h-[200px]" src={icon1} alt="" />
        <img className="absolute  hidden md:block md:ml-[550px] md:mt-32" src={icon2} alt="" />
        <img className="mx-auto md:hidden mt-16 ml-0 md:-mt-20  " src={icon3} alt="" />
        <img className="mx-auto hidden md:block mt-16 md:-mt-20  " src={icon3} alt="" />
      </div>
    </div>
  );
};

export default Banner;
