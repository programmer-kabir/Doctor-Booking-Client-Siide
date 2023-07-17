// import { useQuery } from "@tanstack/react-query";
// import React, { useState } from "react";
// import Container from "../../Component/Container/Container";
// import Title from "../../Component/Title/Title";
// import moment from "moment";
// import Modal from "react-modal";
// import { FaTimes } from "react-icons/fa";
// import { useForm } from "react-hook-form";
// Modal.setAppElement("#root");

// const AvibleSlotes = () => {
//   const { data: services = [], refetch } = useQuery(["services"], async () => {
//     const res = await fetch(`${import.meta.env.VITE_LOCALHOST_KEY}/services`);
//     return res.json();
//   });

//   const [modalIsOpen, setIsOpen] = useState(false);
//   const [selectedService, setSelectedService] = useState(null);

//   const handleBook = (service) => {
//     setSelectedService(service);
//     openModal();
//   };

//   const customStyles = {
//     overlay: {
//       backgroundColor: "rgba(0, 0, 0, 0.6)",
//       zIndex: 9999,
//     },
//     content: {
//       top: "50%",
//       left: "50%",
//       right: "auto",
//       bottom: "auto",
//       transform: "translate(-50%, -50%)",
//       boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)",
//       borderRadius: "8px",
//       padding: "2rem",
//       maxWidth: "400px",
//       width: "90%",
//     },
//   };

//   function openModal() {
//     setIsOpen(true);
//   }

//   function closeModal() {
//     setIsOpen(false);
//   }

//   const handleBooking = service =>{
//     console.log(service);

//   }
// const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const onSubmit = data =>{
//     console.log(data);
//   }
//   return (
//     <Container>
//       <div className="text-center space-y-5 mt-24">
//         <Title
//           title={moment().format("dddd, MMMM D, YYYY")}
//           subtitle="Please select a service."
//         />
//         <Title title="Available slots for Teeth Orthodontics." subtitle=" " />
//         <div className="grid grid-cols-1 md:grid-cols-3 items-center m-auto">
//           {services.map((service) => (
//             <div key={service._id}>
//               <div className="text-center border-black rounded-md mb-5 py-5">
//                 <h2 className="text-[#19D3AE] font-medium ">{service.name}</h2>
//                 <h5>{service.time}</h5>
//                 <button
//                   onClick={() => handleBook(service)}
//                   className="primary-btn mt-5"
//                 >
//                   Book Appointment
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//         <Modal
//           isOpen={modalIsOpen}
//           onRequestClose={closeModal}
//           style={customStyles}
//           contentLabel="Example Modal"
//         >
//           <div className="flex justify-between mb-4">
//             <h2 className="text-xl font-bold">
//               {selectedService && selectedService.name}
//             </h2>
//             <button
//               onClick={closeModal}
//               className="text-gray-500 hover:text-gray-800"
//             >
//               <div className="bg-[#3A4256] p-1 rounded-full">
//                 <FaTimes className="w-5 h-5" />
//               </div>
//             </button>
//           </div>
//           {selectedService && (
//             <div>
//               <h3 className="text-base font-medium my-12">
//                 {moment().format("dddd, MMMM D, YYYY")}
//               </h3>
//               <h3 className="text-base font-medium mb-12">
//                 {selectedService.time}
//               </h3>
//               <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
//                 <div>
//                   <input
//                     type="text"
//                     name="name"
//                     id="name"
//                     {...register("name", { required: true })}
//                     placeholder="Full Name"
//                     className="w-full px-2 py-2 border rounded-md border-gray-300 focus:outline-gray-500 bg-gray-200 text-gray-900"
//                   />
//                 </div>
//                 <div>
//                   <input
//                     type="number"
//                     name="number"
//                     id="number"
//                     placeholder="number"
//                     {...register("number", { required: true })}
//                     className="w-full px-2 py-2 border rounded-md border-gray-300 focus:outline-gray-500 bg-gray-200 text-gray-900"
//                   />
//                 </div>
//                 <div>
//                   <input
//                     type="email"
//                     name="email"
//                     id="email"
//                     placeholder="email"
//                     {...register("email", { required: true })}
//                     className="w-full px-2 py-2 border rounded-md border-gray-300 focus:outline-gray-500 bg-gray-200 text-gray-900"
//                   />
//                 </div>
//                 <button onClick={()=>handleBooking(selectedService)} className="w-full text-white rounded px-2 py-2 transition-colors  duration-500 bg-[#3A4256]">
//                   Submit
//                 </button>
//               </form>
//             </div>
//           )}
//         </Modal>
//       </div>
//     </Container>
//   );
// };

// export default AvibleSlotes;
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Container from "../../Component/Container/Container";
import Title from "../../Component/Title/Title";
import moment from "moment";
import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { json } from "react-router-dom";
import useAuth from "../../Component/Hooks/useAuth";
Modal.setAppElement("#root");

const AvibleSlotes = () => {
  const {user} = useAuth()
  const { data: services = [], refetch } = useQuery(["services"], async () => {
    const res = await fetch(`${import.meta.env.VITE_LOCALHOST_KEY}/services`);
    return res.json();
  });

  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [bookings, setBookings] = useState([]);
  const handleBook = (service) => {
    setSelectedService(service);
    openModal();
  };

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      zIndex: 9999,
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)",
      borderRadius: "8px",
      padding: "2rem",
      maxWidth: "400px",
      width: "90%",
    },
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  // const handleBooking = (service) => {
  //   const local = localStorage.getItem("service");
  // let previousBooking = local ? JSON.parse(local) : null;

  // if (previousBooking) {
  //   previousBooking.quantity += 1;
  // } else {
  //   previousBooking = {
  //     ...service,
  //     quantity: 1,
  //   };
  // }
  // localStorage.setItem("service", JSON.stringify(previousBooking));
  //   // localStorage.setItem("service", JSON.stringify(service));
  // };

  // const onSubmit = (data) => {
  //   const local = localStorage.getItem("service");
  //   const previousBooking = JSON.parse(local);
  //   const book = {
  //     time: previousBooking.time,
  //     doctorName: previousBooking.doctorName,
  //     serviceName: previousBooking.name,
  //     allSlots: previousBooking.allSlots,
  //     name: data.name,
  //     email: data.email,
  //     phone: data.number,
  //     quantity: previousBooking.quantity,
  //   };
  //   console.log(book);
  // };
  const handleBooking = (service) => {
    let local = localStorage.getItem("service");
    let previousBooking = local ? JSON.parse(local) : null;
  
    if (previousBooking) {
      if (previousBooking.name === service.name) {
        previousBooking.quantity += 1;
      } else {
        previousBooking = {
          ...service,
          quantity: 1,
        };
      }
    } else {
      previousBooking = {
        ...service,
        quantity: 1,
      };
    }
    localStorage.setItem("service", JSON.stringify(previousBooking));
  };
  
  const onSubmit = (data) => {
    const local = localStorage.getItem("service");
    const previousBooking = JSON.parse(local);
    
    if (previousBooking) {
      const book = {
        time: previousBooking.time,
        doctorName: previousBooking.doctorName,
        serviceName: previousBooking.name,
        allSlots: previousBooking.allSlots,
        name: data.name,
        email: data.email,
        phone: data.number,
        quantity: previousBooking.quantity,
      };
      console.log(book);
    }
  };
  

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Container>
      <div className="text-center space-y-5 mt-24">
        <Title
          title={moment().format("dddd, MMMM D, YYYY")}
          subtitle="Please select a service."
        />
        <Title title="Available slots for Teeth Orthodontics." subtitle=" " />
        <div className="grid grid-cols-1 md:grid-cols-3 items-center m-auto">
          {services.map((service) => (
            <div key={service._id}>
              <div className="text-center border-black rounded-md mb-5 py-5">
                <h2 className="text-[#19D3AE] font-medium ">{service.name}</h2>
                <h5>{service.time}</h5>
                <button
                  onClick={() => handleBook(service)}
                  className="primary-btn mt-5"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="flex justify-between mb-4">
            <h2 className="text-xl font-bold">
              {selectedService && selectedService.name}
            </h2>
            <button
              onClick={closeModal}
              className="text-gray-500 hover:text-gray-800"
            >
              <div className="bg-[#3A4256] p-1 rounded-full">
                <FaTimes className="w-5 h-5" />
              </div>
            </button>
          </div>
          {selectedService && (
            <div>
              <h3 className="text-base font-medium my-12">
                {moment().format("dddd, MMMM D, YYYY")}
              </h3>
              <h3 className="text-base font-medium mb-12">
                {selectedService.time}
              </h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                <div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    {...register("name", { required: true })}
                    placeholder="Full Name"
                    className="w-full px-2 py-2 border rounded-md border-gray-300 focus:outline-gray-500 bg-gray-200 text-gray-900"
                  />
                </div>
                <div>
                  <input
                    type="number"
                    name="number"
                    id="number"
                    placeholder="Number"
                    {...register("number", { required: true })}
                    className="w-full px-2 py-2 border rounded-md border-gray-300 focus:outline-gray-500 bg-gray-200 text-gray-900"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    defaultValue={user?.email}
                    readOnly
                    {...register("email", { required: true })}
                    className="w-full px-2 py-2 border rounded-md border-gray-300 focus:outline-gray-500 bg-gray-200 text-gray-900"
                  />
                </div>
                <button
                  onClick={() => handleBooking(selectedService)}
                  className="w-full text-white rounded px-2 py-2 transition-colors duration-500 bg-[#3A4256]"
                >
                  Submit
                </button>
              </form>
            </div>
          )}
        </Modal>
      </div>
    </Container>
  );
};

export default AvibleSlotes;
