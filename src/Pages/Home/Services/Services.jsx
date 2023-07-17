import React from "react";
import Container from "../../../Component/Container/Container";
import Title from "../../../Component/Title/Title";
import fluoride from "../../../assets/Service/fluoride 1.png";
import cavity from "../../../assets/Service/cavity 1.png";
import whitening from "../../../assets/Service/whitening 1.png";
import treatment from "../../../assets/Service/treatment 1.png";

const Services = () => {
  return (
    <Container>
      <div className="mt-16 text-center">
        <Title title={"OUR SERVICES"} subtitle={"Services We Provide"} />
        <section className="mt-16 grid  grid-cols-1 md:grid-cols-3 items-center">
          <div className="  flex space-y-2 flex-col items-center px-6">
            <img className="w-28 h-28 mb-2" src={fluoride} alt="" />
            <h5 className="text-[#3A4256] text-base font-semibold">Fluoride Treatment</h5>
            <p>
              Lorem Ipsum is simply dummy printing and typesetting indust Ipsum
              has been the
            </p>
          </div>
          <div className=" flex flex-col space-y-2 items-center px-6">
            <img className="w-28 h-28 mb-2" src={cavity} alt="" />
            <h5 className="text-[#3A4256] text-base font-semibold">Fluoride Treatment</h5>
            <p>
              Lorem Ipsum is simply dummy printing and typesetting indust Ipsum
              has been the
            </p>
          </div>
          <div className="  flex flex-col space-y-2 items-center px-6">
            <img className="w-28 h-28 mb-2" src={whitening} alt="" />
            <h5 className="text-[#3A4256] text-base font-semibold">Fluoride Treatment</h5>
            <p>
              Lorem Ipsum is simply dummy printing and typesetting indust Ipsum
              has been the
            </p>
          </div>
        </section>
        <section className="md:flex mt-16 w-full md:w-2/3 mx-auto items-center gap-5">
            <div className="md:w-1/2">
                <img className="h-3/4" src={treatment} alt="" />
            </div>
            <div className="md:w-1/2 text-left space-y-4">
                <h2 className="text-4xl font-semibold text-left">Exceptional Dental Care, on Your Terms</h2>
                <p className="text-justify">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <button className="primary-btn">GET STARTED</button>
            </div>
        </section>
      </div>
    </Container>
  );
};

export default Services;
