import React, { useState } from "react";
import Container from "../../Component/Container/Container";
import Calendar from "react-calendar";
import img from "../../assets/Appointment/chair 1.png";
const AppointmentBanner = () => {
  const [value, onChange] = useState(new Date());
  return (
    <Container>
      <div>
        <div className="mainWidth ">
          <div className=" grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 items-center justify-between ">
            <div className="flex justify-center">
              <Calendar
                className="shadow-lg border-none"
                selectRange={true}
                onChange={onChange}
                value={value}
              />
            </div>

            <div className="flex justify-end ">
              <img src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AppointmentBanner;
